import React from 'react'
import { Navigate } from 'react-router-dom'
const Protected = ({children}) => {
    let isAuth = localStorage.getItem("chatUser")  
    if (isAuth) {
        return children
    }
      return <Navigate  to = {"/login"} />
}
export default Protected