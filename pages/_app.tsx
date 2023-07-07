import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'jotai';
import Layout from '@/components/Layout';
import { useAtomsDebugValue } from 'jotai-devtools';
export const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <DebugAtoms />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
