import type { PagePropertyValue, BlogPost } from "@/types/notion";
import type { PageObjectResponse } from "@notionhq/client";

// Type-safe function to extract values from different property types
export function getPropertyValue(prop: PagePropertyValue): string {
  // Use the 'type' field as a discriminant to safely access data
  if (!prop) {
    return '';
  }
  switch (prop.type) {
    case 'title':
      return prop.title[0]?.plain_text ?? '';
    case 'rich_text':
      return prop.rich_text[0]?.plain_text ?? '';
    case 'date':
      return prop.date?.start ?? '';
    case 'last_edited_time':
      return prop.last_edited_time;
    // case 'number':
    //   return prop.number?.toString() ?? '';
    // case 'checkbox':
    //   return prop.checkbox ? 'true' : 'false';
    default:
      return '';
  }
};

export function pageToPost(page: PageObjectResponse): BlogPost {
  const props = page.properties;

  return {
    id: page.id,
    title: getPropertyValue(props.Title) ?? 'Untitled',
    slug: getPropertyValue(props.Slug) ?? '',
    publishedDate: getPropertyValue(props.PublishedDate) ?? '',
    updatedDate: getPropertyValue(props.UpdatedDate) ?? '',
    summary: getPropertyValue(props.Summary) ?? '',
  };
}