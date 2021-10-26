import { XpArticle } from '../../types/xp'
import { HashnodeArticle, HashnodePost, HashnodeTag } from './types'

export const from = (article: HashnodePost): XpArticle => {
  return {
    content: article.contentMarkdown,
    title: article.title,
    id: article._id,
    tags: article?.tags?.map((tag: HashnodeTag) => tag.slug),
  }
}

export const to = (article: XpArticle): HashnodeArticle => {
  return {
    contentMarkdown: article.content,
    id: article.id,
    tags: article.tags || [],
    title: article.title,
    ...(article.canonicalUrl && {
      isRepublished: {
        originalArticleURL: article.canonicalUrl,
      },
    }),
  }
}

export default {
  from,
  to,
}
