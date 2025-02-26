import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageHome from './pages/PageHome'


function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <PageHome/>
</div>
  )
}

export default App
