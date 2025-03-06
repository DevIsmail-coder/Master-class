import axios from 'axios'
import React, { useState } from 'react'


 const url = 'https://jsonplaceholder.typicode.com'
const ShowApi = () => {
    const [allData, setAllData] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    const [userData, setUserData] = useState({
       title: "",
       content: ""
    })
    const handleChangle = (e) => {
        const {name, value} = e.target 
        setUserData({...userData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
       try{
         const res = await axios.post(`${url}/posts`, {userData})
         console.log(res)
         handleget()
       } catch (error){
        console.log(error);
        
       }
    }
       const handleget = async () => {
        try{
          const res = await axios.get(`${url}/posts`, )
          console.log(res.data);
          setAllData(res.data)

        } catch (error){
         console.log(error);
         
        }
    }


  return (
    <div>
   <form onSubmit={handleSubmit}>
   <input type="text"  
        name='title'
        value={userData.title}
        onChange={handleChangle}
        />
        <input type="text"  
            name='content'
            value={userData.content}
            onChange={handleChangle}
        />
        <button type='submit'>submit</button>

        <div>
            {
                allData.map((i) => (
                    <div key={i.id}>
                        <h2>{i.title}</h2>
                        <p>{i.body}</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                ))
            }
        </div>
   </form>
    </div>
  )
}

export default ShowApi
