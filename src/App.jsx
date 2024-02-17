import { useState } from 'react'
import Recipe from './assets/components/Recipe'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Recipe currentRecipe={0}/>
      <div><br></br></div>
      <Recipe currentRecipe={1}/>
      <Recipe currentRecipe={2}/>
      <Recipe currentRecipe={3}/>
    </>
  )
}

export default App
