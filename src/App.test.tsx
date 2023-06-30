import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './presentation/App'
import paginateArray from './domain/use_case/paginateArray'
import type CocktailRepository from './domain/repository/CocktailRepository'
import Cocktail from './domain/model/Cocktail'
import GetRandom from './domain/use_case/GetRandom'
import type CacheRepository from './domain/repository/CacheRepository'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

describe('paginateArray', () => {
  describe('when pages start from 0', () => {
    it('should paginate the array correctly for page 0', () => {
      const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

      // Pagination parameters
      const currentPage: number = 0
      const itemsPerPage: number = 5

      const paginatedData: number[] = paginateArray(data, currentPage, itemsPerPage)

      // Expected result for page 0 with 5 items per page
      const expectedPaginatedData: number[] = [1, 2, 3, 4, 5]

      expect(paginatedData).toEqual(expectedPaginatedData)
    })

    it('should paginate the array correctly for page 1', () => {
      const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

      // Pagination parameters
      const currentPage: number = 1
      const itemsPerPage: number = 5

      const paginatedData: number[] = paginateArray(data, currentPage, itemsPerPage)

      // Expected result for page 1 with 5 items per page
      const expectedPaginatedData: number[] = [6, 7, 8, 9, 10]

      expect(paginatedData).toEqual(expectedPaginatedData)
    })

    it('should handle an empty array', () => {
      const data: number[] = []
      const currentPage: number = 0
      const itemsPerPage: number = 5

      const paginatedData: number[] = paginateArray(data, currentPage, itemsPerPage)

      const expectedPaginatedData: number[] = []

      expect(paginatedData).toEqual(expectedPaginatedData)
    })

    it('should handle a page with fewer items than count', () => {
      const data: number[] = [1, 2, 3]
      const currentPage: number = 0
      const itemsPerPage: number = 5

      const paginatedData: number[] = paginateArray(data, currentPage, itemsPerPage)

      const expectedPaginatedData: number[] = [1, 2, 3]

      expect(paginatedData).toEqual(expectedPaginatedData)
    })

    it('should throw an error when the page index is out of bounds', () => {
      const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const currentPage: number = 2
      const itemsPerPage: number = 5

      expect(() => {
        paginateArray(data, currentPage, itemsPerPage)
      }).toThrow('Page index is out of bounds.')
    })
  })
})

describe('tests for GetRandom use case', () => {
  it('should return a random cocktail', async () => {
    const repository = jest.genMockFromModule<CocktailRepository>(
      './domain/repository/CocktailRepository')
    const cachedRepository = jest.genMockFromModule<CacheRepository>(
      './domain/repository/CacheRepository')

    const cocktail = new Cocktail('1', 'margarita')
    repository.getRandomCocktail = jest.fn().mockReturnValue(Promise.resolve(cocktail))

    const getRandom = GetRandom(repository, cachedRepository)
    const result = await getRandom()

    expect(repository.getRandomCocktail).toHaveBeenCalledTimes(1)
    expect(result).toEqual(cocktail)
  })

  it('should return cached cocktail', async () => {
    const repository = jest.genMockFromModule<CocktailRepository>(
      './domain/repository/CocktailRepository')
    const cachedRepository = jest.genMockFromModule<CacheRepository>(
      './domain/repository/CacheRepository')

    const cocktail = new Cocktail('1', 'margarita')
    repository.getRandomCocktail = jest.fn().mockReturnValue(Promise.resolve({}))
    cachedRepository.getCocktailFromCache = jest.fn().mockReturnValue(Promise.resolve(cocktail))

    const getRandom = GetRandom(repository, cachedRepository)
    const result = await getRandom()

    expect(repository.getRandomCocktail).toHaveBeenCalledTimes(1)
    expect(cachedRepository.getCocktailFromCache).toHaveBeenCalledTimes(1)
    expect(result).toEqual(cocktail)
  })
  it('should return cached cocktail', async () => {
    const repository = jest.genMockFromModule<CocktailRepository>(
      './domain/repository/CocktailRepository')
    const cachedRepository = jest.genMockFromModule<CacheRepository>(
      './domain/repository/CacheRepository')

    const cocktail = new Cocktail('1', 'margarita')
    repository.getRandomCocktail =
        jest.fn().mockReturnValue(Promise.reject(new Error('error')))
    cachedRepository.getCocktailFromCache =
        jest.fn().mockReturnValue(Promise.resolve(cocktail))

    const getRandom = GetRandom(repository, cachedRepository)
    const result = await getRandom()

    expect(repository.getRandomCocktail).toHaveBeenCalledTimes(1)
    expect(cachedRepository.getCocktailFromCache).toHaveBeenCalledTimes(1)
    expect(cachedRepository.getCocktailFromCache).toThrow()
    expect(result).toEqual(cocktail)
  })
})
