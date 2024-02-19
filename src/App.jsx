import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/signUp'
import Login from './pages/login'
import Hero from './pages/Hero'
import { useAuthContext } from "./hook/useAuthContext";
function App() {
const {user} = useAuthContext()
const router = createBrowserRouter([
  {
    path: '/',
    element:user?<Home/>:<Hero/>
  },
  {
    path: '/user/login',
    element:!user?<Login/>:<Navigate to="/" />
  },{
    path: '/user/signup',
    element:!user?<Signup/>:<Navigate to="/" />
  }
])
return(
  <>
        <RouterProvider router={router} />
  </>
)
}

export default App
