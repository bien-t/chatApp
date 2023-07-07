import type { Meta, StoryObj } from '@storybook/react';
import SignInPage from '@/pages/signin';
import Header from '@/components/Header/Header';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { userAtom } from '@/components/Layout';

const meta: Meta<typeof SignInPage> = {
  title: 'Pages/SignInPage',
  component: SignInPage,
  tags: ['autodocs'],
  decorators: [(Story) => {
    const [, setUser] = useAtom(userAtom);
    useEffect(() => {
      setUser(null);
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
type Story = StoryObj<typeof SignInPage>;

export const Default: Story = {
};
