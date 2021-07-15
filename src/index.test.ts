import axios from 'axios'
import arms from './index'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>
const article = {
  id: '123',
  title: 'Hello',
  content: 'World!',
}

test('creates an article on dev.to', async () => {
  mockedAxios.post.mockResolvedValue({
    id: article.id,
    title: article.title,
    body_markdown: article.content,
  })

  const instance = arms({ devApiKey: 'fake' })
  const response = await instance.create(article)

  expect(response.dev?.id).toEqual(article.id)
  expect(response.dev?.title).toEqual(article.title)
  expect(response.dev?.content).toEqual(article.content)
})

test('updates an article on dev.to', async () => {
  mockedAxios.put.mockResolvedValue({
    id: article.id,
    title: article.title,
    body_markdown: article.content,
  })

  const instance = arms({ devApiKey: 'fake' })
  const response = await instance.update(article)

  expect(response.dev?.id).toEqual(article.id)
  expect(response.dev?.title).toEqual(article.title)
  expect(response.dev?.content).toEqual(article.content)
})
