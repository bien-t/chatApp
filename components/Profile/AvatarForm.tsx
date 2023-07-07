import { StyledForm } from '@/styles/profile.styles';
import GenericInput from '../GenericInput/GenericInput';
import GenericButton from '../GenericButton/GenericButton';
import { useFormInput } from '@/utils/useFormInput';
import { useAtom } from 'jotai';
import { userAtom } from '../Layout';
import { client } from '@/utils/client';
import type { FormEvent } from 'react';

const AvatarForm = () => {
  const avatar = useFormInput();
  const [user, setUser] = useAtom(userAtom);

  const submitAvatarUrl = async (event: FormEvent) => {
    event.preventDefault();
    const userData = await client.service('usersService').patch(user!._id, { avatarUrl: avatar.value });
    if (user && userData.avatarUrl) {
      setUser({ ...user, avatarUrl: userData.avatarUrl });
    }
    avatar.setValue('');
  };
  return (
    <StyledForm onSubmit={submitAvatarUrl}>
      {
        user?.avatarUrl
        // eslint-disable-next-line @next/next/no-img-element
        && <img src={user.avatarUrl} alt='Avatar image' style={{ margin: '0 auto' }} width={200} height={200} />
      }
      <label htmlFor={avatar.inputId}>Avatar url:</label>
      <GenericInput type="text" id={avatar.inputId} name="avatar url"
        value={avatar.value} placeholder="Avatar url" onChange={avatar.changeValue} />

      <GenericButton type="submit"
        disabled={!avatar.value}>Change avatar</GenericButton>

    </StyledForm>

  );
};

export default AvatarForm;
