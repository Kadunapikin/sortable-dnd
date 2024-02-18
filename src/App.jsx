import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NortionKanban } from './components/section/board/custopmKamban/NortionKanban'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <NortionKanban />
      </div>
    </>
  )
}

export default App
