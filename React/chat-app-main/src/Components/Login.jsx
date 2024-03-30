import React, { useEffect } from 'react'
import { useFireBase } from '../../firebase/fireBaseContext'
import googleLogo from "./google.png"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    useEffect(() => {
        const isAuth = localStorage.getItem("chatUser")
        if (isAuth) {
            navigate("/")
        }
        else {
            navigate("/login")
        }
    }, [])
    const navigate = useNavigate()
    const signInHandler = () => {
        googleSignIn(navigate)
    }
    const { googleSignIn } = useFireBase()

    return (
        <div className='login-container' >
            <div className='container' >
                <h1>Hello , Welcome To Chat App</h1>
                <div className='button'  style={{width:'fit-content'}} onClick={signInHandler}  >
                    <img width={40} src={googleLogo} alt="" />
                    <p  style={{margin:"0"}} >Sign in with Google</p>
                </div>
            </div>
        </div>
    )
}

export default Login