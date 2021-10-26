import dev from './providers/dev'
import hashnode from './providers/hashnode'
import medium from './providers/medium'
import { XpArticle, XpOptions, XpResponse } from './types/xp'

const xp = (options: XpOptions) => {
  return {
    async create(article: XpArticle) {
      const response: XpResponse = {}

      if (options.dev) {
        response.dev = await dev.create(options.dev, article)
      }

      if (options.hashnode) {
        response.hashnode = await hashnode.create(options.hashnode, article)
      }

      if (options.medium) {
        response.medium = await medium.create(options.medium, article)
      }

      return response
    },
    async update(article: XpArticle) {
      const response: XpResponse = {}

      if (options.dev) {
        response.dev = await dev.update(options.dev, article)
      }

      return response
    },
  }
}

export default xp
