import { StyledForm } from '@/styles/profile.styles';
import GenericButton from '../GenericButton/GenericButton';
import GenericMessage from '../GenericMessage/GenericMessage';
import GenericInput from '../GenericInput/GenericInput';
import { useFormInput } from '@/utils/useFormInput';
import { useState, type FormEvent } from 'react';
import { client } from '@/utils/client';
import { useAtom } from 'jotai';
import { userAtom } from '../Layout';

const EmailForm = () => {
  const email = useFormInput();
  const confirmEmail = useFormInput();
  const [user, setUser] = useAtom(userAtom);
  const [emailError, setEmailError] = useState('');

  const checkValue = (email.isEmailValid && confirmEmail.isEmailValid) && email.value === confirmEmail.value;
  const submitEmailChange = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setEmailError('');
      const userData = await client.service('usersService').patchEmail({ email: email.value });
      if (user && userData?.email) {
        setUser({ ...user, email: userData.email });
      }
      email.setValue('');
      confirmEmail.setValue('');
    } catch (error:any) {
      setEmailError(error.message);
    }
  };
  return (
        <StyledForm onSubmit={submitEmailChange}>
            <label htmlFor={email.inputId}>Email:</label>
            <GenericInput type="email" id={email.inputId} name="email" value={email.value} placeholder="Email"
                onChange={email.changeValue} />
            <label htmlFor={confirmEmail.inputId}>Confirm email:</label>
            <GenericInput type="email" id={confirmEmail.inputId} name="confirmEmail"
                value={confirmEmail.value} placeholder="Confirm email"
                onChange={confirmEmail.changeValue} />
            <GenericButton type="submit"
                disabled={!((checkValue && email.value && confirmEmail.value))} >Change email</GenericButton>
            {email.value !== confirmEmail.value
                && <GenericMessage type="error" text="Emails are different" />
            }
            {emailError
                && <GenericMessage type="error" text={emailError} />
            }
        </StyledForm>

  );
};

export default EmailForm;
