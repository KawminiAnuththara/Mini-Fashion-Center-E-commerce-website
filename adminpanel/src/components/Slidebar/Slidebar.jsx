import React from 'react'
import './Slidebar.css'
import { Link } from 'react-router-dom'
import carts from '../../assets/carts.png'
import product from '../../assets/product.png'

const Slidebar = () => {
  return (
    <div className='sidebar'>
       <Link to={'/addproduct'} style={{textDecoration:"none"}} >
          <div className="sidebar-item">
            <img src={carts} alt=''  />
            <p>Add Product</p>
          </div>
       </Link>
       <Link to={'/listproduct'} style={{textDecoration:"none"}} >
          <div className="sidebar-item">
            <img src={product} alt=''  />
            <p>Product List</p>
          </div>
       </Link>
    </div>
  )
}

export default Slidebar