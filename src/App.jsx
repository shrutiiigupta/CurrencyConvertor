import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import InputBox from './components/InputBox'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1 className='bg-orange-500 text-3xl text-center'>Currenccyyyyy</h1>
      {/* <InputBox /> */}
    </>
  )
}

export default App
