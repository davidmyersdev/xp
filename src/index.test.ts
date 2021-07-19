import axios, { AxiosResponse } from 'axios'
import arms from './index'
import { DevArticle, HashnodeResponse } from './types/arms'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>
const article = {
  id: '123',
  title: 'Hello',
  content: 'World!',
}

test('creates an article on dev.to', async () => {
  mockPost({
    id: article.id,
    title: article.title,
    body_markdown: article.content,
  } as DevArticle)

  const instance = arms({ devApiKey: 'fake' })
  const response = await instance.create(article)

  expect(response.dev?.id).toEqual(article.id)
  expect(response.dev?.title).toEqual(article.title)
  expect(response.dev?.content).toEqual(article.content)
})

test('updates an article on dev.to', async () => {
  mockPut({
    id: article.id,
    title: article.title,
    body_markdown: article.content,
  } as DevArticle)

  const instance = arms({ devApiKey: 'fake' })
  const response = await instance.update(article)

  expect(response.dev?.id).toEqual(article.id)
  expect(response.dev?.title).toEqual(article.title)
  expect(response.dev?.content).toEqual(article.content)
})

test('creates an article on hashnode.com', async () => {
  mockPost({
    data: {
      createPublicationStory: {
        post: {
          _id: article.id,
          title: article.title,
          contentMarkdown: article.content,
        },
      },
    },
  } as HashnodeResponse)

  const instance = arms({ hashnodeApiKey: 'fake', hashnodePublicationId: 'fake' })
  const response = await instance.create(article)

  expect(response.hashnode?.id).toEqual(article.id)
  expect(response.hashnode?.title).toEqual(article.title)
  expect(response.hashnode?.content).toEqual(article.content)
})

const mockAxiosResponse = (data: object): AxiosResponse => {
  return {
    data,
  } as AxiosResponse
}

const mockPost = (data: object) => {
  mockedAxios.post.mockResolvedValue(mockAxiosResponse(data))
}

const mockPut = (data: object) => {
  mockedAxios.put.mockResolvedValue(mockAxiosResponse(data))
}
