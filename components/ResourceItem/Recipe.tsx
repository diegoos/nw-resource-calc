// Types
import type { Resource } from 'types/Resource';

import { getResource } from 'modules/resources';
import { ReactElement } from 'react';
import ResourceItem from './ResourceItem';

interface Props {
  resources: Array<Array<number>>;
  multiplier: number | undefined;
}

export default function ResourceRecipe({ resources, multiplier }: Props): ReactElement {
  const ResourceRecipeList: ReactElement[] = resources.map((resource, index) => {
    const [id, amount]: number[] = resource;
    const resourceItems: Resource | null = getResource(id);

    const amountTotal: number = multiplier ? amount * multiplier : amount;

    return <ResourceItem key={index} resource={resourceItems} amount={amountTotal} necessaryAmount={amountTotal} />;
  });

  return <div className='ml-5'>{ResourceRecipeList}</div>;
}
