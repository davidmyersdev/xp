import { MediumArticle } from './types'
import { XpArticle } from '../../types/xp'

export const from = (article: MediumArticle): XpArticle => {
  return {
    id: article.id,
    canonicalUrl: article.canonicalUrl,
    content: article.content,
    published: article.publishStatus === 'public',
    tags: article.tags,
    title: article.title,
  }
}

export const to = (article: XpArticle): MediumArticle => {
  return {
    id: article.id,
    canonicalUrl: article.canonicalUrl,
    content: article.content,
    contentFormat: 'markdown',
    publishStatus: article.published ? 'public' : 'draft',
    tags: article.tags,
    title: article.title,
  }
}

export default {
  from,
  to,
}
