import React, { useEffect } from 'react'
import './App.css'
import Cocktail from '../domain/model/Cocktail'
import { cocktailUseCases } from '../di/ServiceLocator'

function App (): JSX.Element {
  const [cocktail, setCocktail] = React.useState<Cocktail>(
    new Cocktail('', '')
  )

  useEffect(() => {
    cocktailUseCases.getRandom().then((value) => {
      console.log(value)
      setCocktail(value)
    }).catch((reason) => {
      console.log(reason)
    })
  }, [])

  return (
    <h1>Name - {cocktail.name}</h1>
  )
}

export default App
