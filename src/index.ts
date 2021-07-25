import devAdapter from './adapters/dev'
import hashnodeAdapter from './adapters/hashnode'
import devProvider from './providers/dev'
import hashnodeProvider from './providers/hashnode'
import medium from './providers/medium'
import { ArmsArticle, ArmsOptions, ArmsResponse } from './types/arms'

const arms = (options: ArmsOptions) => {
  return {
    async create(article: ArmsArticle) {
      const response: ArmsResponse = {}

      if (options.devApiKey) {
        const devResponse = await devProvider.create(options.devApiKey, devAdapter.to(article))

        response.dev = devAdapter.from(devResponse.data)
      }

      if (options.hashnodeApiKey && options.hashnodePublicationId) {
        const hashnodeResponse = await hashnodeProvider.create(options.hashnodeApiKey, options.hashnodePublicationId, hashnodeAdapter.to(article))

        response.hashnode = hashnodeAdapter.from(hashnodeResponse.data.data.createPublicationStory.post)
      }

      if (options.mediumApiKey) {
        response.medium = await medium.create(options, article)
      }

      return response
    },
    async update(article: ArmsArticle) {
      const response: ArmsResponse = {}

      if (options.devApiKey) {
        const devResponse = await devProvider.update(options.devApiKey, devAdapter.to(article))

        response.dev = devAdapter.from(devResponse.data)
      }

      return response
    },
  }
}

export default arms
