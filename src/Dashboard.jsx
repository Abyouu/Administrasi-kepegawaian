import { useState } from 'react'
import './css/style.css'
import React from 'react'
import Navbar from './Component/Navbar'
import Judul_Dashboard from './Component/Judul_Dashboard'
import Konten from './Component/Konten'



function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Judul_Dashboard />
    <Konten/>
    </>
    
  )
}

export default Dashboard
