import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hook/useLogout'
import { useAuthContext } from '../hook/useAuthContext'

export default function Navbar() {
    const logout = useLogout()
    // console.log(logout)
    const {user} = useAuthContext()
    const handleClick = () => {
        logout()
        alert('logged out')
    }
    
    return (
        <header>
            <div className="navbar">
                <Link to={'/'} >
                    <h1>G-Coms</h1>
                </Link>
                <nav>
                {user && (
                    <div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                    </div>
                    )}
                {!user && (
                    <div className='registre'>
                        <button>
                            <Link to={"/user/login"}>Login</Link>
                        </button>
                        <button id='signup-btn'>
                            <Link to={"/user/signup"} className ="sign-button"> Sign Up</Link>
                        </button>
                    </div>
                )
                }
                </nav>
            </div>
        </header>
    )
}
