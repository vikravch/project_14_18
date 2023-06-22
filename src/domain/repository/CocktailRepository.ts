import type Cocktail from '../model/Cocktail'

interface CocktailRepository {
  getRandomCocktail: () => Promise<Cocktail>
}

export default CocktailRepository
