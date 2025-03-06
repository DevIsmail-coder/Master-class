import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

const url = 'https://free-todo-api.vercel.app'
const VerifyPage = () => {
   const email = localStorage.getItem("email")

    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const navigate = useNavigate()
    
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');


    const handleSubmit = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${url}/user/verify-email?token=${token}`)
            if (res.status === 200) {
                setSuccess(true);
                setLoading(false)
                setMessage("Your verification was successful!");
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            }

        } catch (err) {
            setLoading(false)
            setError(true);
            setMessage(err.response?.data?.error || "Verification failed. Please try again.");
            setSuccess(false)
        }  

    }
   
      const handleresend = async () =>   {
        try{
           const res = await axios.post(`${url}/user/resend-verification${email}`)
           console.log(res);
           
        }catch (err){
            console.log(error);
            
        }
      }

    useEffect(() => {
        handleSubmit()
    }, [])


    return (
        <div className='verify'>
           
           <div className='verify'>
            {loading && <h2>Verifying your account...</h2>}
            {success && <h1>{message}</h1>}
            {error && <p style={{ color: 'red' }}>{message}</p>}
        </div>
        <button onClick={handleresend}>resend verification email</button>
        </div >
    )
}

export default VerifyPage