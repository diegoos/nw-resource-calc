import '../styles/global.css';

import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Header from 'components/Header';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { pathname, asPath, locale } = router;

  useEffect(() => {
    const localeFromCookie = Cookies.get('NEXT_LOCALE');

    if (locale !== localeFromCookie) {
      router.push(pathname, asPath, { locale: localeFromCookie });
    }
  }, [router, pathname, asPath, locale]);

  return (
    <>
      <Header />

      <div className='container lg mx-auto'>
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
