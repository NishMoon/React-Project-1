import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, se
    tNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('password')

  //useRef hook

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@:;?><£$%^*()[]~#" 
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
  
  useEffect(() => {passwordGenerator()}, [length, numberAllowed,  charAllowed,  passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto text-orange-500 shadow-md rounded-lg px-4 py-3 my-8 bg-slate-600 ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text"
            value={password}
            className="w-full outline-none py-1 px-3"
            placeholder="Password" 
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
          className=" outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput"> Numbers </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
