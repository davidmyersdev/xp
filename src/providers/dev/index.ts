import adapter from './adapter'
import client from './client'
import { DevOptions } from './types'
import { XpArticle } from '../../types/xp'

export const create = async ({ apiKey }: DevOptions, article: XpArticle) => {
  const response = await client.create(apiKey, adapter.to(article))

  return adapter.from(response.data)
}

export const update = async ({ apiKey }: DevOptions, article: XpArticle) => {
  const response = await client.update(apiKey, adapter.to(article))

  return adapter.from(response.data)
}

export default {
  create,
  update,
}
