import { setName, startLoading, stopLoading } from './action'
import { cocktailUseCases } from '../../di/ServiceLocator'

export const getRandomCocktail = () => async (dispatch: any) => {
  dispatch(startLoading())
  console.log('Hello loading')
  const cocktail = await cocktailUseCases.getRandom()
  dispatch(setName(cocktail.name))
  console.log('Hello loaded' + cocktail.name)
  dispatch(stopLoading())
}
