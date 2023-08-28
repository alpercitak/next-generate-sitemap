import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/header';
import HydrationZustand from '../components/hydration-zustand';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HydrationZustand>
      <Header />
      <Component {...pageProps} />
    </HydrationZustand>
  );
}

export default MyApp;
