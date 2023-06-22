import CocktailNetworkRepository from '../data/remote/CocktailNetworkRepository'
import getRandom from '../domain/use_case/GetRandom'
import { type JSX, useEffect } from 'react'
import type Cocktail from '../domain/model/Cocktail'

export interface CocktailUseCases {
  getRandom: () => Promise<Cocktail>
}

export let cocktailUseCases: CocktailUseCases
export function InitServiceLocator (): JSX.Element | null {
  useEffect(() => {
    console.log('InitServiceLocator')

    const repository = new CocktailNetworkRepository()

    cocktailUseCases = {
      getRandom: getRandom(repository)
    }
  }, [])
  return null
}
