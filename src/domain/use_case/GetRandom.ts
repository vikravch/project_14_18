import type Cocktail from '../model/Cocktail'
import type CocktailRepository from '../repository/CocktailRepository'

// const repository = new Repository()
/* const getRandom: (repository: CocktailRepository) => Promise<Cocktail> =
    async (repository) => {
      return await repository.getRandomCocktail()
} */

export default function (
  repository: CocktailRepository
): () => Promise<Cocktail> {
  return async () => {
    return await repository.getRandomCocktail()
  }
}
