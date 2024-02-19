import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useSignUp } from '../hook/useSignup'
import LeftShape from '../pages/Leftshape'
export default function signUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignUp()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setIsLoading(true);
    await signup(email, password)
    if(!error){
      alert("signup successful")

    }
  }

  return (
    <>
      <div >
        <Navbar/>
          <form className="signup" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          
          <label>Email address:</label>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />
          <label>Password:</label>
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />

          <button disabled={isLoading} id='creer'>Sign up</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
      <LeftShape/>
      <img src="/Ellipse.svg" alt="photo" className="eclipse" />
      <img src="/Fill 1.svg" alt="photo" className="fill-form" />

    </>
  )
}
