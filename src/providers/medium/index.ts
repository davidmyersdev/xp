import { XpArticle } from '../../types/xp'
import adapter from './adapter'
import client from './client'
import { MediumOptions } from './types'

export const create = async ({ apiKey }: MediumOptions, article: XpArticle) => {
  if (apiKey) {
    const response = await client.create(apiKey, adapter.to(article))

    // Content is not returned in the API response, so we need to merge it back in.
    return adapter.from({ ...response.data.data, content: article.content })
  }
}

export default {
  create,
}
