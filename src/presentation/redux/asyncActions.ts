import { cocktailUseCases } from '../../di/ServiceLocator'
import { setName, startLoading, stopLoading } from './rootReducerSlice'

export const getRandomCocktail = () => async (dispatch: any) => {
  dispatch(startLoading())
  console.log('Hello loading')
  const cocktail = await cocktailUseCases.getRandom()
  dispatch(setName(cocktail.name))
  console.log('Hello loaded' + cocktail.name)
  dispatch(stopLoading())
}
