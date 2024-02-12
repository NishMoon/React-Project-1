import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  let myObject = {
    username:'Nishit',
    age: 38
  }

  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Welcome to Tailwind</h1>
      <Card username="Nishit" age="38" btnText="Click me"/>
      <Card username="Dharti" age="32" btnText="Follow me"/>
    </>
  )
}

export default App
