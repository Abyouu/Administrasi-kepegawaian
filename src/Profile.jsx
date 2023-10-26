import { useState } from 'react'
import './css/style.css'
import React from 'react'
import Navbar from './Component/Navbar'
import Judul_profile from './Component/Judul_profile'
import Konten_profile from './Component/Konten_profile'




function Profile() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Judul_profile/>
    <Konten_profile/>
    </>
    
  )
}

export default Profile
