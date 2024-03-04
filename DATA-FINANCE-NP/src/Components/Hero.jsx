import React, {Component} from 'react';


function Hero() {
  return (
    <div className='text-white'>

      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-green-400 font-bold p-2 '>Growing with data analytics</p>

        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data
        </h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-3xl text-xl py-4'>Fast, flexible financing for </p>
            
        </div>   
      </div>
    </div>
  )
}

export default Hero