import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { type Store } from './redux/types'
import { getRandomCocktail } from './redux/asyncActions'

function App (): JSX.Element {
  const [theme, setTheme] = React.useState('light')

  const dispatch = useDispatch<any>()
  const name = useSelector((state: Store) => state.rootReducer.name)

  useEffect(() => {
    dispatch(getRandomCocktail())
  }, [])

  useEffect(() => {
    console.log('name' + name)
  }, [name])

  return (
      <div className={theme}>
        <h1>Name - {name}</h1>
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
