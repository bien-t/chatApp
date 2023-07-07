import type { Meta, StoryObj } from '@storybook/react';
import Profile from '@/pages/profile';
import Header from '@/components/Header/Header';
import { useAtom } from 'jotai';
import { userAtom } from '@/components/Layout';
import { useEffect } from 'react';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof Profile> = {
  title: 'Pages/ProfilePage',
  component: Profile,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  decorators: [(Story) => {
    const [, setUser] = useAtom(userAtom);
    useEffect(() => {
      setUser({
        email: 'Test', role: 'user', _id: 'string', avatarUrl: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png', authorizedChannels: []
      });
    }, [setUser]);

    return (
      <>
        <Header />
        <Story />
      </>
    );
  }]
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {

};

export const IncorrectEmailData: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText('Email:', {
      selector: 'input'
    });
    await userEvent.type(emailInput, 'example-emai');
  }
};

export const CorrectEmailData: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText('Email:', {
      selector: 'input'
    });
    await userEvent.type(emailInput, 'example-emal@example.com');
    const emailConfirmInput = canvas.getByLabelText('Confirm email:', {
      selector: 'input'
    });
    await userEvent.type(emailConfirmInput, 'example-emal@example.com');
  }
};

export const IncorrectPasswordData: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordButton = canvas.getByRole('button', { name: /password/i });
    await userEvent.click(passwordButton);
    const passwordInput = canvas.getByLabelText('Password:', {
      selector: 'input'
    });
    await userEvent.type(passwordInput, '123');
    const passworConfirmInput = canvas.getByLabelText('Confirm password:', {
      selector: 'input'
    });
    await userEvent.type(passworConfirmInput, '12');
  }
};

export const CorrectPasswordData: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordButton = canvas.getByRole('button', { name: /password/i });
    await userEvent.click(passwordButton);
    const passwordInput = canvas.getByLabelText('Password:', {
      selector: 'input'
    });
    await userEvent.type(passwordInput, '123');
    const passworConfirmInput = canvas.getByLabelText('Confirm password:', {
      selector: 'input'
    });
    await userEvent.type(passworConfirmInput, '123');
  }
};

export const Username: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const usernameButton = canvas.getByRole('button', { name: /username/i });
    await userEvent.click(usernameButton);
  }
};

export const Avatar: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatarButton = canvas.getByRole('button', { name: /avatar/i });
    await userEvent.click(avatarButton);
  }
};
