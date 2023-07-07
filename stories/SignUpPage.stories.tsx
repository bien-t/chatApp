import type { Meta, StoryObj } from '@storybook/react';
import SignUpPage from '@/pages/signup';
import Header from '@/components/Header/Header';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { userAtom } from '@/components/Layout';

const meta: Meta<typeof SignUpPage> = {
  title: 'Pages/SignUpPage',
  component: SignUpPage,
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
type Story = StoryObj<typeof SignUpPage>;

export const Default: Story = {

};
