import type { PagePropertyValue, BlogPost } from '@/types/notion'

import type { PageObjectResponse } from '@notionhq/client'

// Type-safe function to extract values from different property types
export function getPropertyValue(prop: PagePropertyValue) {
  // Use the 'type' field as a discriminant to safely access data
  if (!prop) {
    return ''
  }
  switch (prop.type) {
    case 'title':
      return prop.title[0]?.plain_text ?? ''
    case 'rich_text':
      return prop.rich_text[0]?.plain_text ?? ''
    case 'date':
      return prop.date?.start ?? ''
    case 'last_edited_time':
      return prop.last_edited_time
    case 'multi_select':
      return prop.multi_select.map((item) => item.name)
    case 'select':
      return prop.select?.name ?? ''
    // case 'number':
    //   return prop.number?.toString() ?? '';
    // case 'checkbox':
    //   return prop.checkbox ? 'true' : 'false';
    default:
      return ''
  }
}

function getFlagValues(prop: PageObjectResponse['properties']) {
  const flag = getPropertyValue(prop.Flag)
  return {
    isPinned: flag === 'Pinned',
  }
}

export function pageToPost(page: PageObjectResponse): BlogPost {
  const props = page.properties

  return {
    id: page.id,
    title: (getPropertyValue(props.Title) as string) ?? 'Untitled',
    slug: (getPropertyValue(props.Slug) as string) ?? '',
    publishedDate: (getPropertyValue(props.PublishedDate) as string) ?? '',
    updatedDate: (getPropertyValue(props.UpdatedDate) as string) ?? '',
    summary: (getPropertyValue(props.Summary) as string) ?? '',
    tags: (getPropertyValue(props.Tags) as string[]) ?? [],
    ...getFlagValues(props),
  }
}
