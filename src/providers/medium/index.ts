import adapter from './adapter'
import client from './client'
import { ArmsArticle, ArmsOptions } from '../../types/arms'

export const create = async ({ mediumApiKey }: ArmsOptions, article: ArmsArticle) => {
  if (mediumApiKey) {
    const response = await client.create(mediumApiKey, adapter.to(article))

    // Content is not returned in the API response, so we need to merge it back in.
    return adapter.from({ ...response.data.data, content: article.content })
  }
}

export default {
  create,
}
