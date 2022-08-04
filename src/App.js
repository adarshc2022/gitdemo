import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:param' element={<User/>} />
          <Route path='/user' element={<User/>} />
        </Routes>
      </Router>
    </>
  )
}

