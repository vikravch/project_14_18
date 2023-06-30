import type Cocktail from '../model/Cocktail'
import type CocktailRepository from '../repository/CocktailRepository'
import type CacheRepository from '../repository/CacheRepository'

// const repository = new Repository()
/* const getRandom: (repository: CocktailRepository) => Promise<Cocktail> =
    async (repository) => {
      return await repository.getRandomCocktail()
} */

export default function (
  repository: CocktailRepository,
  cacheRepository: CacheRepository
): () => Promise<Cocktail> {
  return async () => {
    try {
      const res = await repository.getRandomCocktail()
      if (res.id === undefined) {
        return await cacheRepository.getCocktailFromCache()
      } else {
        return res
      }
    } catch (error) {
      return await cacheRepository.getCocktailFromCache()
    }
  }
}
