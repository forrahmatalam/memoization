import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import { useState } from 'react'

const App = () => {

const [count, setCount] = useState(0)
const [Users, setUsers] = useState({name: "Rahmat", id:110})

console.log("App rendering");
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <h1>Count is {count}</h1>
    <h1>Name is {Users.name}</h1>
     <button className='bg-red-500 p-2 rounded m-2' onClick={()=>setCount(count+1)}>Count</button>
     <button className='bg-red-500 p-2 rounded m-2' onClick={()=>setUsers({...Users, name: "Afzal" })}>Change</button>
      <Home Users={Users}/>
      <About Users={Users}/>
    </div>
  )
}

export default App
