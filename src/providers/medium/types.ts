export interface MediumArticle {
  title: string,
  content: string,
  id?: string,
  authorId?: string,
  canonicalUrl?: string,
  contentFormat?: string,
  license?: string,
  licenseUrl?: string,
  publishStatus?: string,
  publishedAt?: number,
  tags?: string[],
  url?: string,
}

export interface MediumArticleResponse {
  data: {
    title: string,
    content?: string,
    id?: string,
    authorId?: string,
    canonicalUrl?: string,
    contentFormat?: string,
    license?: string,
    licenseUrl?: string,
    publishStatus?: string,
    publishedAt?: number,
    tags?: string[],
    url?: string,
  },
}

export interface MediumAuthorIdResponse {
  data: {
    id: string,
  },
}

export interface MediumOptions {
  apiKey: string,
}
