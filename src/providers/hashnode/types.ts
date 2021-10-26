export interface HashnodeArticle {
  contentMarkdown: string,
  title: string,
  tags: string[],
  id?: string,
  isRepublished?: {
    originalArticleURL: string,
  },
}

export interface HashnodeOptions {
  apiKey: string,
  publicationId: string,
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

export interface HashnodeTag {
  _id: string
  slug: string
  name?: string
}
