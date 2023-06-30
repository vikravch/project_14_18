import type Cocktail from '../model/Cocktail'

interface CacheRepository {
  getCocktailFromCache: () => Promise<Cocktail>
}
export default CacheRepository
