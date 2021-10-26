import { XpArticle } from '../../types/xp'
import adapter from './adapter'
import client from './client'
import { HashnodeOptions } from './types'

export const create = async ({ apiKey, publicationId }: HashnodeOptions, article: XpArticle) => {
  const response = await client.create(apiKey, publicationId, adapter.to(article))

  return adapter.from(response.data.data.createPublicationStory.post)
}

export default {
  create,
}
