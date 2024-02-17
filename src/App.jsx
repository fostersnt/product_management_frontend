import { useState } from 'react'
import Users from './components/Users';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Users />
    </>
  )
}

export default App
