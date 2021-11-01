import Cookies from 'js-cookie';
import type { Resource } from 'types/Resource';

import resourceJson from '../resources.json';

export function getResourceList(): Resource[] {
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

export function translateResource(resource: Resource, field: string): string {
  const locale: string | undefined = Cookies.get('NEXT_LOCALE');

  const resourceAnnotate: Resource & { [key: string]: any } = resource;

  let translatedField: string = resourceAnnotate[field];

  if (locale) {
    const resourceTranslations = resourceAnnotate.i18n[locale.toLowerCase()];

    translatedField = resourceTranslations && resourceTranslations[field];

    if (!translatedField) {
      translatedField = resourceAnnotate[field];
    }
  }

  return translatedField;
}
