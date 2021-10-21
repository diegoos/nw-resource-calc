import { useState } from 'react';
import Head from 'next/head';
import ResourceItem from 'components/ResourceItem/ResourceItem';
import ResourceSelect from 'components/ResourceSelect/ResourceSelect';

// Types
import type { NextPage } from 'next';
import type { Resource } from 'types/Resource';

const Home: NextPage = () => {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [resourceAmount, setResourceAmount] = useState<number>(1);

  return (
    <>
      <Head>
        <title>NW Resource Calc | Beta</title>
      </Head>

      <div className='max-w-screen-md m-auto'>
        <h1>NW Resource Calc</h1>

        <p>Hello, this is a simple resource amount calculator for New World resources, until now it has very limited available resources.</p>

        <ResourceSelect setResource={setSelectedResource} setAmount={setResourceAmount} />

        <div className='border-t pt-4'>
          {selectedResource && <ResourceItem resource={selectedResource} amount={resourceAmount} />}
        </div>
      </div>
    </>
  );
};

export default Home;
