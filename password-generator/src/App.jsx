import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$%^&*()[]{}<>?/~'
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 50)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-400 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClip}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={length} onChange={(e) => {setLength(e.target.value)}} className='cursor-pointer' />
            <label>Length = {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id='numInput' onChange={() => {setNumAllowed((prev) => !prev)}} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='numInput' onChange={() => {setCharAllowed((prev) => !prev)}} />
            <label>Chars</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
