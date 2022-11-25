import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BookLayout = () => {
  return (
    <div>
       <ul>
        <li><Link to="/books/1">Book1</Link></li>
         <li><Link to="/books/2">Book2</Link></li>
         <li><Link to="/books/new">New Book</Link></li>
      </ul>
      <Outlet context={{name:"srikanth"}}/>
    </div>
  )
}

export default BookLayout
