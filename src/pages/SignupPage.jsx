import React, { useState } from 'react'

const SignupPage = () => {
    const [userData, setUserData] = useState({
email: "",
password: ""
    })

    const handleChangle = (e) => {
        const {name, value} = e.target 
        setUserData({...userData, [name]: value})
    }
    console.log(userData);
    
  return (


    <div>
      <input type="text" placeholder='email' 
      name='email'
      value={userData.email}
      onChange={handleChangle}
      />
      <input type="text"  placeholder='password' 
      name='password'
      value={userData.password}
      onChange={handleChangle}
      />
    </div>
  )
}

export default SignupPage
