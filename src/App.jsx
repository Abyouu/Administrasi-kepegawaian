import { useState } from 'react'
import './css/style.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Dashboard from './Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Login />}/> */}
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path='profile/:nik' element={<Profile/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
