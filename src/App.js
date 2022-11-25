import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import About from './Components/About'
import Books from './Components/Books'
import Contact from './Components/Contact'
import Home from './Components/Home'
import NotFount from './Components/NotFount'
import BooksList from './Components/BooksList'
import NewBook from './Components/NewBook'
import BookLayout from './Components/BookLayout'

const App = () => {
  return (
    <center> 
    <nav>
      <ul style={{display:"flex" ,gap:"2rem"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
    </nav>
     <Routes>

      <Route path='/'  element={<Home/>}  />
      <Route path='/about'  element={<About/>}  />
      <Route path='/contact'  element={<Contact/>}  />
      { /* if we have one path with different path like id we can use Nested Route*/}
      <Route path='/books' element={<BookLayout/>}>
        <Route index element={<BooksList/>}/>
        <Route path=":id" element={<Books/>}/>
         <Route path='new' element={<NewBook/>} />
      </Route>

     {/*<Route path='/books'  element={<BooksList/>}  />
      <Route path='/books/:id' element={<Books/>} />
  <Route path='/books/new' element={<NewBook/>} />*/}
      <Route path='*'  element={<NotFount/>}  />
     
     </Routes>
     </center>
  )
}

export default App

