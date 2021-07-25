export interface MediumArticle {
  title: string,
  id?: string,
  authorId?: string,
  canonicalUrl?: string,
  content?: string,
  contentFormat?: string,
  license?: string,
  licenseUrl?: string,
  publishStatus?: string,
  publishedAt?: number,
  tags?: string[],
  url?: string,
}

export interface MediumArticleResponse {
  data: MediumArticle,
}

export interface MediumAuthorIdResponse {
  data: {
    id: string,
  },
}
