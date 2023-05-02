import type { AppProps } from 'next/app';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Layout from '@/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProSidebarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProSidebarProvider>
  );
}
