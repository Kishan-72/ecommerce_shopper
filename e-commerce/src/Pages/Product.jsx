import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router';
import Breadcrumb from '../component/Breadcrumbs/Breadcrumb';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../component/DescriptionBox/DescriptionBox';
import RelatedProducts from '../component/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  // console.table(all_product);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
