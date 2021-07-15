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
}

export interface ArmsResponse {
  dev?: ArmsArticle,
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
