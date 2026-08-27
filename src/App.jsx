import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import { useState } from 'react'

const App = () => {

const [count, setCount] = useState(0)

console.log(count);

  return (
    <div>
    <h1>Memoization</h1>
     <button className='bg-red-500 p-2 rounded m-2' onClick={()=>setCount(count+1)}>Button</button>
      <Home />
      <About />
    </div>
  )
}

export default App
