import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { Header } from './Components/Header/Index'

const App = () => {
  return (
  <div>
  <Header/>
  <Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route  path='/cart' element={<Cart/>}/>
  </Routes>
  </div>
  )
}

export default App