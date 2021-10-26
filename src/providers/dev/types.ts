export interface DevOptions {
  apiKey: string,
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
