import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router'
import add_product from '../../assets/Product_cart.svg'
import product_list_icon from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src={add_product} alt="" />
        <p>Add Product</p>
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src={product_list_icon} alt="" />
        <p>List Product</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar
