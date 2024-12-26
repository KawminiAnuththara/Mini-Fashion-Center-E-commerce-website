import React from 'react';
import './Popular.css';
import {data_product} from '../assets/data';
import Item from '../Items/Item';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import {motion} from "framer-motion"


const Popular = () => {
  return (
    <div className="popular">
      
      <h1>POPULAR IN MINI FASION</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
