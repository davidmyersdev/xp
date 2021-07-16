import axios, { AxiosResponse } from 'axios'
import { DevArticle } from '../types/arms'

const apiUrl = 'https://dev.to/api'
const buildHeaders = (apiKey: string) => {
  return {
    'api-key': apiKey,
    'content-type': 'application/json',
  }
}

export const create = async (apiKey: string, article: DevArticle): Promise<AxiosResponse<DevArticle>> => {
  const url = `${apiUrl}/articles`
  const headers = buildHeaders(apiKey)

  return axios.post<DevArticle>(url, { article }, { headers })
}

export const update = async (apiKey: string, article: DevArticle): Promise<AxiosResponse<DevArticle>> => {
  const url = `${apiUrl}/articles/${article.id}`
  const headers = buildHeaders(apiKey)

  return axios.put<DevArticle>(url, { article }, { headers })
}

export default {
  create,
  update,
}
