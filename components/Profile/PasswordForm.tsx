import { StyledForm } from '@/styles/profile.styles';
import GenericInput from '../GenericInput/GenericInput';
import GenericButton from '../GenericButton/GenericButton';
import GenericMessage from '../GenericMessage/GenericMessage';
import { useFormInput } from '@/utils/useFormInput';
import { useAtom } from 'jotai';
import { userAtom } from '../Layout';
import { client } from '@/utils/client';
import type { FormEvent } from 'react';

const PasswordForm = () => {
  const password = useFormInput();
  const confirmPassword = useFormInput();
  const checkPassword = password.value === confirmPassword.value;
  const [user] = useAtom(userAtom);

  const submitPasswordChange = async (event:FormEvent)=>{
    event.preventDefault();
    await client.service('usersService').patch(user!._id, { password: password.value, passwordConfirm: confirmPassword.value });
    password.setValue('');
    confirmPassword.setValue('');
  };
  return (
    <StyledForm onSubmit={submitPasswordChange}>
      <label htmlFor={password.inputId}>Password:</label>
      <GenericInput type="password" id={password.inputId} name="password"
        value={password.value} placeholder="Password" onChange={password.changeValue} />
      <label htmlFor={confirmPassword.inputId}>Confirm password:</label>

      <GenericInput type="password" id={confirmPassword.inputId} name="confirmPassword"
        value={confirmPassword.value} placeholder="Confirm password" onChange={confirmPassword.changeValue} />
      <GenericButton type="submit"
        disabled={!((checkPassword && password.value && confirmPassword.value))} >Change password</GenericButton>
      {!checkPassword
        && <GenericMessage type="error" text="Passwords are different" />
      }
    </StyledForm>

  );
};

export default PasswordForm;
