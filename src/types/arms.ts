export interface ArmsArticle {
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

export interface ArmsOptions {
  devApiKey?: string,
  hashnodeApiKey?: string,
  hashnodePublicationId?: string,
  mediumApiKey?: string,
}

export interface ArmsResponse {
  dev?: ArmsArticle,
  hashnode?: ArmsArticle,
  medium?: ArmsArticle,
}

export interface DevArticle {
  body_markdown: string,
  title: string,
  canonical_url?: string,
  description?: string,
  id?: string,
  main_image?: string,
  organization_id?: string,
  published?: boolean,
  series?: string,
  tags?: string[],
}

export interface HashnodeArticle {
  contentMarkdown: string,
  title: string,
  tags: string[],
  id?: string,
  isRepublished?: {
    originalArticleURL: string,
  },
}

export interface HashnodeTag {
  _id: string
  slug: string
  name?: string
}

export interface HashnodePost {
  _id: string,
  contentMarkdown: string,
  title: string,
  coverImage?: string,
  isActive?: boolean,
  slug?: string,
  tags?: HashnodeTag[]
}

export interface HashnodeResponse {
  data: {
    createPublicationStory: {
      code?: number,
      message?: string,
      post: HashnodePost,
      success?: boolean,
    },
  },
}
