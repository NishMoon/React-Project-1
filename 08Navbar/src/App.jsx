import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Button from "./Components/Button"
import Navigation from "./Components/Navigation"


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <section className="h-screen bg-Hero bg-cover h- font-[Poppins] md:bg-top bg-center ">

      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-primary text-2xl font-medium py-5">Welcome to your solution</h2>
        <h1> Rhythm Bio-pharm-Tech Consultancy</h1>
        <div className="my-7 text-xl">
          <Button/>
        </div>
        <div>
          <Navigation />  
        </div>
      </div>

      
        
    
    </section>
  )
}

export default App
