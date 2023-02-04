import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Homepage/Home'
import Gift from '../NavPage/Gift'
import Order from '../NavPage/Order'
import Pay from '../NavPage/Pay'
import Store from '../NavPage/Store'

const AllRoute = () => {
  return (
    <div>
        

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gift' element={<Gift/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/pay' element={<Pay/>}/>
          <Route path='/store' element={<Store/>}/>
        </Routes>


    </div>
  )
}

export default AllRoute
