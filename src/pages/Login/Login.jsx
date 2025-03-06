
import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import axios from 'axios';
import checkOnline from '../../hooks/useCheckData';
import toast from 'react-hot-toast';


const url = "https://free-todo-api.vercel.app"

const Login = () => {
    const isOnline = checkOnline()

const navigate = useNavigate()

const [userData, setUserData] = useState({
    email: "",
    password: "",
})

const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
}
    

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const res = await  axios.post(`${url}/user/log-in`,  userData)
        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
    
    }


  return (
    <div className='Loginbody'>
         {/* {!isOnline && toast.error("sorry you are offline")} */}
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
            {/* <p>{errorMess.email}</p> */}
        </article>
        <article className='loginwrap'>
            <input type="password" placeholder='password'
                name='password'
                value={userData.password}
                onChange={handleChange}
            />
            {/* <p>{errorMess.password}</p> */}
        </article>
        <article className='Signupcheck'>Don’t have an account?  <span onClick={() => navigate("/signup")}>Sign up</span></article>
        <button className='loginbut' type='submit' >
            log in</button>
    </form>
</div>
  )
}

export default Login
