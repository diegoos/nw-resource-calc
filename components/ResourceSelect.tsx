import React, { ReactElement } from 'react';
import Select, { SingleValue } from 'react-select';
import { getResource, getResourceList, translateResource } from 'modules/resources';

// Types
import type { Resource } from 'types/Resource';

interface Props {
  setResource: (a: Resource | null) => any;
  setAmount: (a: number) => any;
}

export default function ResourceSelect({ setResource, setAmount }: Props): ReactElement {
  const resourceList: Resource[] = getResourceList();

  type OptionType = {
    value: string;
    label: string;
  };

  const selectOptions: OptionType[] = resourceList.map((resource: Resource) => ({
    value: resource.id?.toString() || '',
    label: translateResource(resource, 'name') || '',
  }));

  const selectCustomStyle: Object = {
    control: (provided: Object) => ({
      ...provided,
      minHeight: '2rem',
      border: 'none',
    }),
  };

  const onChangeHandler = (option: SingleValue<OptionType>) => {
    setResource(getResource(option?.value));
    console.log('change', option);
  };

  return (
    <div className='flex justify-center items-center mt-6 mb-4'>
      <div className='w-5/6 mr-4'>
        <label htmlFor='resource-select'>Resource:</label>
        <Select
          instanceId='resource-select'
          styles={selectCustomStyle}
          className='w-full h-9 text-black rounded'
          classNamePrefix='resource-select'
          options={selectOptions}
          defaultValue={null}
          onChange={(option) => onChangeHandler(option)}
        />
      </div>

      <div className='w-1/6 mr-4'>
        <label htmlFor='resource-amount'>Amount:</label>
        <input
          id='resource-amount'
          className='w-full h-9 p-4 text-black rounded'
          type='number'
          defaultValue='1'
          min='1'
          onChange={(e) => setAmount(parseInt(e.currentTarget.value, 10) || 1)}
        />
      </div>
    </div>
  );
}
