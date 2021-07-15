import axios from 'axios'
import { DevArticle } from '../types/arms'

const apiUrl = 'https://dev.to/api'
const buildHeaders = (apiKey: string) => {
  return {
    'api-key': apiKey,
    'content-type': 'application/json',
  }
}

export const create = async (apiKey: string, article: DevArticle): Promise<DevArticle> => {
  const url = `${apiUrl}/articles`
  const headers = buildHeaders(apiKey)

  return axios.post(url, { headers, data: article })
}

export const update = async (apiKey: string, article: DevArticle): Promise<DevArticle> => {
  const url = `${apiUrl}/articles/${article.id}`
  const headers = buildHeaders(apiKey)

  return axios.put(url, { headers, data: article })
}

export default {
  create,
  update,
}
