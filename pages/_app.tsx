import '../styles/global.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='container lg mx-auto'>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
