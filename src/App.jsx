import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route,Link } from 'react-router-dom'
import Admin from './Admin'
import Login from './Login'
import Signup from './Signup'
import NoPage from './NoPage'
import Home from './Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/*"} element={<NoPage />} />
      </Routes>

    </>
  )
}

export default App
