import React, { useCallback } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import { useState } from 'react'
import { useMemo } from 'react'

const App = () => {

const [count, setCount] = useState(0)
const [Users, setUsers] = useState({name: "Rahmat", id:110})

let greet =useCallback(()=>{
  console.log("Hey good morning....."); //mughe chiea ki ye greet ka ref badalne se rokna hia islie main useCall back hook use krunga memo ka 
},[Users])



let calculation =useMemo(()=>{
  let sum = 0;
console.log("Calculation rendering");
  for(let i=0; i<100000000; i++){
    sum += i;
 } return sum;
},[]);



console.log("App rendering");
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <h1>Count is {count}</h1>
    <h1>Name is {Users.name}</h1>
    <h1>Sum is {calculation}</h1>
     <button className='bg-red-500 p-2 rounded m-2' onClick={()=>setCount(count+1)}>Count</button>
     <button className='bg-red-500 p-2 rounded m-2' onClick={()=>setUsers({...Users, name: "Afzal" })}>Change</button>
      <Home greet={greet}/>
      <About greet={greet}/>
    </div>
  )
}

export default App
