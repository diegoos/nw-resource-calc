import Link from 'next/link';
import { ReactElement } from 'react';
import LocationSelector from './LocationSelector';

export default function Header(): ReactElement {
  return (
    <header className='bg-gray-900 mb-10 p-2'>
      <div className='container flex justify-between mx-auto'>
        <Link href='/'>
          <a>
            <h1>NW Resource Calc</h1>
          </a>
        </Link>

        <LocationSelector />
      </div>
    </header>
  );
}
