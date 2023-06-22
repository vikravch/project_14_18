import type CocktailRepository from '../../domain/repository/CocktailRepository'
import Cocktail from '../../domain/model/Cocktail'

class CocktailNetworkRepository implements CocktailRepository {
  async getRandomCocktail (): Promise<Cocktail> {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const data = await response.json()
    return Cocktail.fromDTO(data.drinks[0])
  }
}

export default CocktailNetworkRepository
