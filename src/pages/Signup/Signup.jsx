import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import axios from 'axios';
import toast from 'react-hot-toast';


const url = "https://free-todo-api.vercel.app"
const Signup = () => {
    const [userError, setUserError] = useState({})
    const navigate = useNavigate()
     const baseUrl = "http://localhost:5173"
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
            const res = await  axios.post(`${url}/user/sign-up`, {email: userData.email, password: userData.password, baseUrl})
            console.log(res);
            toast.success(res.data.message)
            localStorage.setItem("email", userData.email)
            
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error)
        }
        
        }
    

    return (
        <div className='Signupbody'>
        
            <form className='Signupmain' onSubmit={handleSubmit} >
                <article className='Signupheader'>
                    <FaArrowAltCircleLeft className='Signupicon' />
                    <h3>Sign up</h3>
                </article>
                <article className='Signupwrap'>
                    <input type="text" placeholder='email'
                        name='email'
                        value={userData.email}
                        onChange={handleChange}
                    />

                </article>
                <article className='Signupwrap'>
                    <input type="text" placeholder='password'
                        name='password'
                        value={userData.passwo}
                        onChange={handleChange}
                    />
                </article>
                <article className='Signupcheck'>Already have an account? <span onClick={() => navigate("/")}> Login</span></article>
                <button className='Signupbut' type="submit" >
                    sign-up
                </button>
            </form>
        </div>
    )
}

export default Signup
