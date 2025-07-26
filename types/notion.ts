import type {
  PageObjectResponse,
  BlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export type PagePropertyValue = PageObjectResponse['properties'][string];

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  publishedDate: string;
  updatedDate: string;
  summary: string;
}

export interface PostContent extends BlogPost {
  content: BlockObjectResponse[];
}
