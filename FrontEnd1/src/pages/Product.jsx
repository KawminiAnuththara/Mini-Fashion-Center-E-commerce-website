import React, { useContext } from 'react'
import {ShopContext} from '../../../FrontEnd1/src/context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrums from '../../../FrontEnd1/src/components/Breadcrums/Breadcrums';
import DisplayProduct from '../../../FrontEnd1/src/components/DisplayProduct/DisplayProduct';
import DescriptionBox from '../../../FrontEnd1/src/components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../../../FrontEnd1/src/components/RelatedProducts/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <DisplayProduct product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
