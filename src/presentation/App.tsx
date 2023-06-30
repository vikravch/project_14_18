import React, { useEffect } from 'react'
import './App.css'
import Cocktail from '../domain/model/Cocktail'
import { cocktailUseCases } from '../di/ServiceLocator'

function App (): JSX.Element {
  const [cocktail, setCocktail] = React.useState<Cocktail>(
    new Cocktail('', '')
  )
  const [theme, setTheme] = React.useState('light')

  useEffect(() => {
    cocktailUseCases.getRandom().then((value) => {
      console.log(value)
      setCocktail(value)
    }).catch((reason) => {
      console.log(reason)
    })
  }, [])

  return (
      <div className={theme}>
        <h1>Name - {cocktail.name}</h1>
        <div className={'themeSwitcher'} onClick={
            () => {
              if (theme === 'light') {
                setTheme('dark')
              } else {
                setTheme('light')
              }
            }
        }></div>
      </div>
  )
}

export default App
