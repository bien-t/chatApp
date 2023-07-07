import { useEffect, useState } from 'react';
import GenericButton from '../GenericButton/GenericButton';
import GenericInput from '../GenericInput/GenericInput';
import GenericMessage from '../GenericMessage/GenericMessage';
import { StyledSignPanel } from './SignPanel.styles';
import type { SignPanelProps } from '@/types/types';
import type { FormEvent } from 'react';
import { client } from '@/utils/client';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { userAtom } from '../Layout';
import { useFormInput } from '@/utils/useFormInput';

const SignPanel = ({
  panelTitle, signType
}: SignPanelProps) => {
  const password = useFormInput();
  const confirmPassword = useFormInput();
  const email = useFormInput();
  const username = useFormInput();

  const [messageText, setMessageText] = useState('');
  const [messageType, setMessageType] = useState<'error' | 'success'>();
  const [showMessage, setShowMessage] = useState(false);

  const checkPassword = signType === 'signup' ? password.value === confirmPassword.value && password.value && confirmPassword.value : Boolean(password.value);
  const checkUsername = signType === 'signup' ? username.value : true;

  useEffect(() => {
    if (signType === 'signup') {
      if (password.value !== confirmPassword.value) {
        setMessageText('Passwords are different');
        setMessageType('error');
        setShowMessage(true);
      } else {
        setMessageText('');
        setShowMessage(false);
      }
    }
  }, [confirmPassword.value, password.value, signType]);

  const router = useRouter();

  const [user] = useAtom(userAtom);
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [router, user]);

  const handleLogin = async () => {
    try {
      const auth = await client.authenticate({
        strategy: 'local',
        email: email.value,
        password: password.value
      });
      if (auth) {
        router.push('/');
      }
    } catch (error: any) {
      setMessageText(error.message);
      setMessageType('error');
      setShowMessage(true);
    }
  };

  const submitData = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (signType === 'signup') {
        await client.service('usersService').create({
          password: password.value, email: email.value, passwordConfirm: confirmPassword.value, username: username.value
        });
      }
      handleLogin();
    } catch (error: any) {
      const text = error.data.email.message ?? error.message;
      setMessageText(text);
      setMessageType('error');
      setShowMessage(true);
    }
  };
  const buttonLabel = signType === 'signin' ? 'Sign in' : 'Sign up';
  return (
    <StyledSignPanel>
      <h2>{panelTitle}</h2>
      <form onSubmit={submitData}>
        <label htmlFor={email.inputId}>Email address:</label>
        <GenericInput id={email.inputId} name="email" type="email" value={email.value} placeholder="Email address"
          onChange={email.changeValue}
          required />
        {(signType === 'signup')
          && <>
            <label htmlFor={username.inputId}>Username:</label>
            <GenericInput id={username.inputId} name="username" type="text" value={username.value}
              placeholder="Username" onChange={username.changeValue} required maxLength={30} />
          </>

        }
        <label htmlFor={password.inputId}>Password:</label>
        <GenericInput id={password.inputId} name="password" type="password" value={password.value} placeholder="Password"
          onChange={password.changeValue}
          required />
        {(signType === 'signup')
          && <>
            <label htmlFor={confirmPassword.inputId}>Confirm password:</label>
            <GenericInput id={confirmPassword.inputId} name="passwordConfirm" type="password" value={confirmPassword.value}
              placeholder="Confirm password" onChange={confirmPassword.changeValue} required />
          </>
        }

        <GenericButton type='submit' disabled={(!email.isEmailValid || !checkPassword || !checkUsername)}>{buttonLabel}</GenericButton>
        {(showMessage)
          && <>
            {(messageText && messageType)
              && <GenericMessage text={messageText} type={messageType} />
            }
          </>
        }
      </form>
    </StyledSignPanel >
  );
};

export default SignPanel;
