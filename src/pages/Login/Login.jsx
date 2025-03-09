
import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import axios from 'axios';


const url = "https://free-todo-api.vercel.app"

const Login = () => {
const navigate = useNavigate()
const [userError, setUserError] = useState({})
const [userData, setUserData] = useState({
    email: "",
    password: "",
})

const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })

    if(userError[name]){
        setUserError({...userError, [name]: ""})
    }
}
const validation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}
     
 const handleError = () => {
    let error = {}
    if(userData.email.trim() === "" || !validation(userData.email)){
        error.email = "please enter a valid email"
    }
    if(userData.password.trim() === ""){
       error.password = "please enter a correct password"
    }
    if(Object.keys(error).length > 0){
        setUserError(error)
        return false
    }
    else{
        return true
    }
 }

const handleSubmit = async (e) => {
    e.preventDefault()
    if(!handleError()) return
    try {
        const res = await axios.post(`${url}/user/log-in`,  userData)
        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
    }

  return (
    <div className='Loginbody'>
    <form className='Loginmain' onSubmit={handleSubmit} >
        <article className='Loginheader'>
            <FaArrowAltCircleLeft className='loginicon' />
            <h3>Login</h3>
        </article>
        <article className='loginwrap'>
            <input type="email" placeholder='email'
                name='email'
                value={userData.email}
                onChange={handleChange}
            />
            <p>{userError.email}</p>
        </article>
        <article className='loginwrap'>
            <input type="password" placeholder='password'
                name='password'
                value={userData.password}
                onChange={handleChange}
            />
            <p>{userError.password}</p>
        </article>
        <article className='Signupcheck'>Don’t have an account?  <span onClick={() => navigate("/signup")}>Sign up</span></article>
        <button className='loginbut' type='submit' >
            log in</button>
    </form>
</div>
  )
}

export default Login
