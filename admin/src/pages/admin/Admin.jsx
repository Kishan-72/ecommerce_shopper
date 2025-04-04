import React from 'react'
import './Admin.css'
import Sidebar from '../../components/sidebar/Sidebar'
import {Routes,Route} from 'react-router'
import AddProduct from '../../components/addProduct/AddProduct'
import ListProduct from '../../components/listProduct/ListProduct'

const Admin = () => {
  return (
    <div className='admin'>
     <Sidebar/>
     <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
     </Routes>
    </div>
  )
}

export default Admin
