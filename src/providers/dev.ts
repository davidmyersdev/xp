import fetch from 'cross-fetch'

export interface Article {
  body_markdown: string,
  title: string,
  canonical_url?: string,
  description?: string,
  id?: string,
  main_image?: string,
  organization_id?: string,
  published?: boolean,
  series?: string,
  tags?: string[],
}

const apiUrl = 'https://dev.to/api'
const buildHeaders = (apiKey: string) => {
  return {
    'api-key': apiKey,
    'content-type': 'application/json',
  }
}

export const create = async (apiKey: string, article: Article) => {
  const url = `${apiUrl}/articles`
  const method = 'post'
  const headers = buildHeaders(apiKey)
  const body = JSON.stringify({ article })

  return fetch(url, { method, headers, body }).then(res => res.json())
}

export const update = async (apiKey: string, article: Article) => {
  const url = `${apiUrl}/articles/${article.id}`
  const method = 'put'
  const headers = buildHeaders(apiKey)
  const body = JSON.stringify({ article })

  return fetch(url, { method, headers, body }).then(res => res.json())
}

export default {
  create,
  update,
}
