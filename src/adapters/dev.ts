import { ArmsArticle, DevArticle } from '../types/arms'

export const from = (article: DevArticle): ArmsArticle => {
  return {
    content: article.body_markdown,
    title: article.title,
    canonicalUrl: article.canonical_url,
    description: article.description,
    id: article.id,
    coverImage: article.main_image,
    organizationId: article.organization_id,
    published: article.published,
    series: article.series,
    tags: article.tags,
  }
}

export const to = (article: ArmsArticle): DevArticle => {
  return {
    body_markdown: article.content,
    title: article.title,
    canonical_url: article.canonicalUrl,
    description: article.description,
    id: article.id,
    main_image: article.coverImage,
    organization_id: article.organizationId,
    published: article.published,
    series: article.series,
    tags: article.tags,
  }
}

export default {
  from,
  to,
}
