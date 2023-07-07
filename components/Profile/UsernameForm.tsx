import { StyledForm } from '@/styles/profile.styles';
import GenericInput from '../GenericInput/GenericInput';
import GenericButton from '../GenericButton/GenericButton';
import { useFormInput } from '@/utils/useFormInput';
import { useAtom } from 'jotai';
import { userAtom } from '../Layout';
import { client } from '@/utils/client';
import type { FormEvent } from 'react';

const UsernameForm = () => {
  const username = useFormInput();
  const [user] = useAtom(userAtom);

  const submitUsernameChange = async (event:FormEvent) => {
    event.preventDefault();
    await client.service('usersService').patch(user!._id, { username: username.value });
    username.setValue('');
  };
  return (
        <StyledForm onSubmit={submitUsernameChange}>
            <label htmlFor={username.inputId}>Username:</label>
            <GenericInput type="text" id={username.inputId} name="username"
                value={username.value} placeholder="Username" onChange={username.changeValue} maxLength={30} />

            <GenericButton type="submit"
                disabled={!username.value}>Change username</GenericButton>

        </StyledForm>

  );
};

export default UsernameForm;
