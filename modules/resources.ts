import type { Resource } from 'types/Resource';

import resourceJson from '../resources.json';

export function getResourceList() {
  const resources: Resource[] = resourceJson;

  return resources;
}

export function getResource(id: number | string | null | undefined) {
  if (!id) return null;

  const resourceId: number = typeof id === 'string' ? parseInt(id, 10) : id;

  const allResources: Resource[] = getResourceList();

  const filteredResources: Resource[] = allResources.filter(
    (item: Resource) => resourceId === item.id
  );

  return filteredResources.length > 0 ? filteredResources[0] : null;
}
