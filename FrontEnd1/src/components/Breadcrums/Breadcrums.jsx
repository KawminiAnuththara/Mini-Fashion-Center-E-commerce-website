import React from 'react'
import './Breadcrums.css'
import dropdown from '../assets/arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={dropdown} alt=''/> SHOP <img src={dropdown} alt=''/> {product.category} <img src={dropdown} alt='' /> {product.name}
    </div>
  )
}

export default Breadcrums
