import axios, { AxiosResponse } from 'axios'
import { HashnodeArticle, HashnodeResponse } from './types'

const apiUrl = 'https://api.hashnode.com'
const buildHeaders = (apiKey: string) => {
  return {
    'authorization': apiKey,
    'content-type': 'application/json',
  }
}

export const create = async (apiKey: string, publicationId: string, article: HashnodeArticle): Promise<AxiosResponse<HashnodeResponse>> => {
  const url = `${apiUrl}/articles`
  const headers = buildHeaders(apiKey)
  const variables = {
    input: article,
    publicationId: publicationId,
    hideFromHashnodeFeed: true,
  }

  const query = `
    mutation createPublicationStory($input: CreateStoryInput!, $publicationId: String!) {
      createPublicationStory(input: $input, publicationId: $publicationId) {
        post {
          _id
          contentMarkdown
          title
          publication {
            domain
          }
          slug
          tags {
            _id
            slug
            name
          }
        }
      }
    }
  `

  return axios.post<HashnodeResponse>(url, { query, variables }, { headers })
}

export default {
  create,
}
