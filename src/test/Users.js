import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import User1 from './User1'
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';

function Users() {
  
  return (
    <>
    <Navbar/>
    <Routes>
          <Route path='/' element={<User1 />} />
          <Route path='create' element={<UserCreate />} />
          <Route path='useredit/:id' element={<UserEdit />} />

    </Routes>
    </>
  )
}

export default Users