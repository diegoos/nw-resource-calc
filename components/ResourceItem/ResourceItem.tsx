import { ReactElement } from 'react';
import Image from 'next/image';
import Recipe from './Recipe';

// Types
import type { Resource } from 'types/Resource';
import { translateResource } from 'modules/resources';

interface Props {
  resource: Resource | null;
  amount?: number;
  necessaryAmount?: number;
}

export default function ResourceItem({ resource, amount, necessaryAmount }: Props): ReactElement {
  if (resource) {
    return (
      <div>
        <div className='w-80 border border-white p-1 flex items-center'>
          {/* TODO: Get images */}
          {/* <img src='https://via.placeholder.com/30' alt={resource.name} className='mr-2' /> */}

          <p className='mr-2'>{translateResource(resource, 'name')}</p>

          <p>
            <span className='text-gray-600 mr-2'>x</span>
            {necessaryAmount || amount}
          </p>
        </div>

        {resource.resources && (
          <div className='space-y-0 mb-4'>
            <Recipe resources={resource.resources} multiplier={amount} />
          </div>
        )}
      </div>
    );
  }

  return <></>;
}
