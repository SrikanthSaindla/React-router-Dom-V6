import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Books = () => {
    const {id}=useParams()
    let obj=useOutletContext()
  return (
    <div>
         
      <h1>Book {id} {obj.name}</h1>
    </div>
  )
}

export default Books
