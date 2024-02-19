import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import LeftShape from '../pages/Leftshape'
import { useLogin } from '../hook/useLogin'
export default function login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setIsLoading(true);
    await login(email, password)
    if(!error){
      alert("login successful")

    }
  }

  return (
    <>
    <div >
      <Navbar/>
        <form className="login" onSubmit={handleSubmit}>
          <h3>Log in</h3>
          
          <label>Email address:</label>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            // value={email} 
          />
          <label>Password:</label>
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            // value={password} 
          />

          <button disabled={isLoading} id='creer'>Login </button>
          {error && <div className="error">{error}</div>}
        </form>
    </div>
    <LeftShape/>
    <img src="/Ellipse.svg" alt="photo" className="eclipse" />
            <img src="/Fill 1.svg" alt="photo" className="fill-form" />

    </>
  )
}
