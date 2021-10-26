export interface XpArticle {
  content: string,
  title: string,
  canonicalUrl?: string,
  coverImage?: string,
  description?: string,
  id?: string,
  organizationId?: string, // this might be specific to dev.to
  published?: boolean,
  series?: string,
  tags?: string[],
}

export interface XpOptions {
  dev?: {
    apiKey: string,
  },
  hashnode?: {
    apiKey: string,
    publicationId: string,
  },
  medium?: {
    apiKey: string,
  },
}

export interface XpResponse {
  dev?: XpArticle,
  hashnode?: XpArticle,
  medium?: XpArticle,
}
