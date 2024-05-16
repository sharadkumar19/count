import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const user='sharad'
  let [count, setcount]=useState(0);

  // let counter=0
  const addvalue=()=>{
    
    count=count+1
    setcount(count);
    console.log(count)
  }

  const minusvalue=()=>{
    if(count-1<0)
      {
        count=0
      }
    else
    {
      count=count-1
    }
    setcount(count)
  }

  return (
    <>
     <h1>tu chalu ho ja {user}</h1>
      <h2>counter value {count}</h2>
      <button onClick={addvalue}>add value</button>
      <button onClick={minusvalue}>minus value</button>       
      
    </>
  )
}

export default App
