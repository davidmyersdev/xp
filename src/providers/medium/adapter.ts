import { MediumArticle } from './types'
import { ArmsArticle } from '../../types/arms'

export const from = (article: MediumArticle): ArmsArticle => {
  return {
    id: article.id,
    canonicalUrl: article.canonicalUrl,
    content: article.content,
    published: article.publishStatus === 'public',
    tags: article.tags,
    title: article.title,
  }
}

export const to = (article: ArmsArticle): MediumArticle => {
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
