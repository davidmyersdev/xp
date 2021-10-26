import axios, { AxiosResponse } from 'axios'
import xp from './index'
import { DevArticle } from './providers/dev/types'
import { HashnodeResponse } from './providers/hashnode/types'
import { MediumArticleResponse, MediumAuthorIdResponse } from './providers/medium/types'

type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

interface MockRequest {
  data: any, // TODO: Look into using generics here.
  method: RequestMethod,
  urlRegex: RegExp,
}

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>
const article = {
  id: '123',
  title: 'Hello',
  content: 'World!',
}

test('creates an article on dev.to', async () => {
  mockApi([
    buildMockResponse<DevArticle>('post', /.+\/articles$/, {
      id: article.id,
      title: article.title,
      body_markdown: article.content,
    })
  ])

  const instance = xp({ dev: { apiKey: 'fake' } })
  const response = await instance.create(article)

  expect(response.dev?.id).toEqual(article.id)
  expect(response.dev?.title).toEqual(article.title)
  expect(response.dev?.content).toEqual(article.content)
})

test('updates an article on dev.to', async () => {
  mockApi([
    buildMockResponse<DevArticle>('put', /.+\/articles\/.+$/, {
      id: article.id,
      title: article.title,
      body_markdown: article.content,
    })
  ])

  const instance = xp({ dev: { apiKey: 'fake' } })
  const response = await instance.update(article)

  expect(response.dev?.id).toEqual(article.id)
  expect(response.dev?.title).toEqual(article.title)
  expect(response.dev?.content).toEqual(article.content)
})

test('creates an article on hashnode.com', async () => {
  mockApi([
    buildMockResponse<HashnodeResponse>('post', /.*\/articles$/, {
      data: {
        createPublicationStory: {
          post: {
            _id: article.id,
            title: article.title,
            contentMarkdown: article.content,
          },
        },
      },
    })
  ])

  const instance = xp({ hashnode: { apiKey: 'fake', publicationId: 'fake' } })
  const response = await instance.create(article)

  expect(response.hashnode?.id).toEqual(article.id)
  expect(response.hashnode?.title).toEqual(article.title)
  expect(response.hashnode?.content).toEqual(article.content)
})

test('creates an article on medium.com', async () => {
  mockApi([
    buildMockResponse<MediumAuthorIdResponse>('get', /.*\/me$/, {
      data: {
        id: 'authorId',
      },
    }),
    buildMockResponse<MediumArticleResponse>('post', /.*\/users\/.*\/posts$/, {
      data: {
        id: article.id,
        title: article.title,
      },
    }),
  ])

  const instance = xp({ medium: { apiKey: 'fake' } })
  const response = await instance.create(article)

  expect(response.medium?.id).toEqual(article.id)
  expect(response.medium?.title).toEqual(article.title)
  expect(response.medium?.content).toEqual(article.content)
})

const mockAxiosResponse = <T>(data: T): AxiosResponse<T> => {
  return {
    data,
  } as AxiosResponse
}

const buildMockResponse = <T>(method: RequestMethod, urlRegex: RegExp, data: T) => {
  return {
    method,
    urlRegex,
    data,
  }
}

const mockImplementation = (method: RequestMethod, requests: MockRequest[]) => {
  return async (url: string): Promise<AxiosResponse | undefined> => {
    const match = requests.find(route => route.method === method && route.urlRegex.test(url))

    if (match) {
      return mockAxiosResponse(match.data)
    }
  }
}

const mockApi = (requests: MockRequest[]) => {
  mockedAxios.get.mockImplementation(mockImplementation('get', requests))
  mockedAxios.post.mockImplementation(mockImplementation('post', requests))
  mockedAxios.put.mockImplementation(mockImplementation('put', requests))
  mockedAxios.patch.mockImplementation(mockImplementation('patch', requests))
  mockedAxios.delete.mockImplementation(mockImplementation('delete', requests))
}
