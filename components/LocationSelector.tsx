import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';

export default function LocationSelector(): ReactElement {
  const router = useRouter();
  const { pathname, asPath, locales, defaultLocale } = router;

  const [locale, setLocale] = useState<string>(defaultLocale || '');

  const handleLocation = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.currentTarget.value;

    Cookies.set('NEXT_LOCALE', selectedLocale);

    setLocale(selectedLocale);

    router.push(pathname, asPath, { locale: selectedLocale });
  };

  useEffect(() => {
    const localeFromCookie = Cookies.get('NEXT_LOCALE');
    setLocale(localeFromCookie || '');
  }, []);

  return (
    <select className='text-black rounded-md p-2' onChange={handleLocation} value={locale}>
      {locales?.map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
}
