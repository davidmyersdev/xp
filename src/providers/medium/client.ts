import axios, { AxiosResponse } from 'axios'
import { MediumArticle, MediumAuthorIdResponse, MediumArticleResponse } from './types'

const apiUrl = 'https://api.medium.com/v1'
const buildHeaders = (apiKey: string) => {
  return {
    'authorization': `Bearer ${apiKey}`,
    'content-type': 'application/json',
  }
}

const fetchAuthorId = async (apiKey: string) => {
  const headers = buildHeaders(apiKey)
  const response = await axios.get<MediumAuthorIdResponse>(`${apiUrl}/me`, { headers })

  return response.data.data.id
}

export const create = async (apiKey: string, article: MediumArticle): Promise<AxiosResponse<MediumArticleResponse>> => {
  const authorId = await fetchAuthorId(apiKey)
  const url = `${apiUrl}/users/${authorId}/posts`
  const headers = buildHeaders(apiKey)

  return axios.post<MediumArticleResponse>(url, article, { headers })
}

export default {
  create,
}
