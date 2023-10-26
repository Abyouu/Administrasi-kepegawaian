import { useState } from 'react'
import './index.css'
import React from 'react'
import Judul_profile from './Component/Judul_Login'
import Login from './Component/Login'
import Konten_profile from './Component/Konten_profile'


function Login_page() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Judul_profile/>
     <Login/>
    </>
  )
}

export default Login_page

