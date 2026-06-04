import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Booking from '../pages/Booking'
import CarList from '../pages/CarList'
import Contact from '../pages/Contact'

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CarList" element={<CarList />} />
        <Route path=":id" element={<Booking />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default MainRouter
