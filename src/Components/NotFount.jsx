/*import React from 'react'
import { Navigate } from 'react-router-dom'

const NotFount = () => {
  return (
     <Navigate to='/'/>
  )
}

export default NotFount*/
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const NotFount = () => {

    const navigate=useNavigate()
    useEffect(()=>{
      setTimeout(()=>{
navigate('/')
      },2000)
       
    },[])
  return  <h1>Not found</h1>
       
  
}

export default NotFount
