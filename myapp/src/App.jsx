import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Tabledata from './components/Tabledata'
import Statebasics from './components/Statebasics'
import Count from './components/Count'
import Productcard from './components/Productcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <br />
  
<Routes>
  <Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/Data' element={<Tabledata/>}/>
<Route path='/state' element={<Statebasics/>}/>
<Route path='/count' element={<Count/>}/>
<Route path='/card' element={<Productcard/>}/>





</Routes>


 
    </>
  )
}

export default App
