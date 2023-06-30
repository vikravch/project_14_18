import type CocktailRepository from './domain/repository/CocktailRepository'
import Cocktail from './domain/model/Cocktail'
import GetRandom from './domain/use_case/GetRandom'

describe('tests for GetRandom use case', () => {
  it('should return a random cocktail', async () => {
    const repository = jest.genMockFromModule<CocktailRepository>(
      './domain/repository/CocktailRepository')
    const cocktail = new Cocktail('1', 'margarita')
    repository.getRandomCocktail = jest.fn().mockReturnValue(Promise.resolve(cocktail))

    const getRandom = GetRandom(repository)
    const result = getRandom()

    expect(repository.getRandomCocktail).toHaveBeenCalledTimes(1)
    expect(result).toEqual(cocktail)
  })
})
