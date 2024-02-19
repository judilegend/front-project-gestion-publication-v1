import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/auth.context.jsx'
import Login from './pages/login.jsx'
import SignUp from './pages/signUp.jsx'
import Home from './pages/Home.jsx'
import { PostContextProvider } from './context/post.context.jsx'
import {NextUIProvider} from "@nextui-org/react";
import { useAuthContext } from './hook/useAuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <NextUIProvider>
          <App/>
        </NextUIProvider>
      </PostContextProvider>
    </AuthContextProvider>
   </React.StrictMode>,
)
