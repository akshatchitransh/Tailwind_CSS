  import { useState } from 'react'
  import Button from './components/button'
  import Input from './components/Input'

  import './App.css'

  function App() {
    const [count, setCount] = useState(0)
  const placeholder="write something"
    return (
    <div className='bg-[#00274e] h-screen'>
      <div className='flex justify-center align'><div className=' mt-3 text-white text-2xl '><span className='text-[#40a3b2]'>Webinar</span>.org!!</div></div>
      
<div className='flex justify-center align mt: 10 sm:mt-50' > <div className='text-white text-2xl'>Verify Your Age</div></div>
     <div className='flex justify-center mt-20'> <div className='flex justify-center align-middle flex-col w-70'> 
       <Input placeholder = {placeholder}></Input>
      <Button  disabled = {true}> SIGN UP !</Button>
    

   </div></div>
    
 
    </div>
    )
  }

  export default App
