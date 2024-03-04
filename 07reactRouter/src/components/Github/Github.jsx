import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  
  /*const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/NishMoon")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
  }, [])*/

  const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-400 text-3xl '>Github followers: {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={200} className='mx-4'/>
    ID:{data.id} Name:{data.name}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/NishMoon')
  return response.json()
}