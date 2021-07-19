import { ArmsArticle, HashnodeArticle, HashnodePost } from '../types/arms'

export const from = (article: HashnodePost): ArmsArticle => {
  return {
    content: article.contentMarkdown,
    title: article.title,
    id: article._id,
    tags: article?.tags?.map(tag => tag.slug),
  }
}

export const to = (article: ArmsArticle): HashnodeArticle => {
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
