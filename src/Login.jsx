import { useState } from 'react'
import '../css/style.css'
import Login_card from './Component/Login_card'



function Login() {
  const [count, setCount] = useState(0)

  return (
     <Login_card/>
  )
}

export default Login
