import type { Meta, StoryObj } from '@storybook/react';
import SignPanel from '@/components/SignPanel/SignPanel';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof SignPanel> = {
  title: 'Components/SignPanel',
  component: SignPanel,
  tags: ['autodocs'],
  argTypes: {
    signType: {
      options: ['signin', 'signup'],
      control: { type: 'select' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof SignPanel>;

export const SignUp: Story = {
  args: {
    panelTitle: 'Sign up',
    signType: 'signup'
  }
};

export const SignIn: Story = {
  args: {
    panelTitle: 'Sign in',
    signType: 'signin'
  }
};

export const SignInActiveButton: Story = {
  name: 'Sign in - active sign button',
  play: async ({ canvasElement })=>{
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText('Email address:', {
      selector: 'input'
    });
    await userEvent.type(emailInput, 'example-email@email.com');
    const passwordInput = canvas.getByLabelText('Password:', {
      selector: 'input'
    });
    await userEvent.type(passwordInput, '123');
  },
  args: {
    panelTitle: 'Sign in',
    signType: 'signin'
  }
};

export const SignUpPasswordError: Story = {
  name: 'Sign up - password error message',
  play: async ({ canvasElement })=>{
    const canvas = within(canvasElement);
    const passwordInput = canvas.getByLabelText('Password:', {
      selector: 'input'
    });
    await userEvent.type(passwordInput, '123', {
      delay: 100
    });
    const passwordConfirmInput = canvas.getByLabelText('Confirm password:', {
      selector: 'input'
    });
    await userEvent.type(passwordConfirmInput, '12', {
      delay: 100
    });
  },
  args: {
    panelTitle: 'Sign up',
    signType: 'signup'
  }
};

export const SignUpActiveButton: Story = {
  name: 'Sign up - active sign button',
  play: async ({ canvasElement })=>{
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText('Email address:', {
      selector: 'input'
    });
    await userEvent.type(emailInput, 'example-email@email.com');

    const usernameInput = canvas.getByLabelText('Username:', {
      selector: 'input'
    });
    await userEvent.type(usernameInput, 'username');

    const passwordInput = canvas.getByLabelText('Password:', {
      selector: 'input'
    });
    await userEvent.type(passwordInput, '123');
    const passwordConfirmInput = canvas.getByLabelText('Confirm password:');
    await userEvent.type(passwordConfirmInput, '123');
  },
  args: {
    panelTitle: 'Sign up',
    signType: 'signup'
  }
};
