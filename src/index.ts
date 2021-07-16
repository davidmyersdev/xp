import { create, update } from './providers/dev'
import { from, to } from './adapters/dev'
import { ArmsArticle, ArmsOptions, ArmsResponse } from './types/arms'

const arms = (options: ArmsOptions) => {
  return {
    async create(article: ArmsArticle) {
      const response: ArmsResponse = {}

      if (options.devApiKey) {
        const devResponse = await create(options.devApiKey, to(article))

        response.dev = from(devResponse.data)
      }

      return response
    },
    async update(article: ArmsArticle) {
      const response: ArmsResponse = {}

      if (options.devApiKey) {
        const devResponse = await update(options.devApiKey, to(article))

        response.dev = from(devResponse.data)
      }

      return response
    },
  }
}

export default arms
