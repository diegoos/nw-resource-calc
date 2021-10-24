import { ReactElement } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import LocationSelector from './LocationSelector';

export default function Header(): ReactElement {
  return (
    <header className='bg-gray-900 mb-10 p-2'>
      <div className='container flex justify-between items-center mx-auto'>
        <Link href='/'>
          <a>
            <h1>NW Resource Calc</h1>
          </a>
        </Link>

        <div className='ml-auto mr-4 leading-none pt-px'>
          <a
            className='github-button'
            href='https://github.com/diegoos/nw-resource-calc'
            data-size='large'
            data-show-count='true'
            aria-label='Star diegoos/nw-resource-calc on GitHub'
          >
            Star
          </a>
        </div>

        <LocationSelector />
      </div>

      <Script src='https://buttons.github.io/buttons.js' />
    </header>
  );
}
