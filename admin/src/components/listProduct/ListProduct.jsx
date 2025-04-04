import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cros_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
  const [allProduct, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:8000/allproduct")
      .then((res) => res.json())
      .then((data) => {setAllProducts(data)});
  };

  useEffect(()=>{
    fetchInfo();
  },[])

  const removeProduct = async (id)=>{
    await fetch('http://localhost:8000/removeproduct',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }
  return (
    <div className="list-product">
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
        {allProduct.map((product)=>{
            return <React.Fragment key={product.id}> <div  className="listproduct-format-main listproduct-format">
                <img src={product.image} alt="" className="listproduct-product-icon"/>
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>${product.category}</p>
                <img onClick={()=>{removeProduct(product.id)}} className="listproduct-removeicon" src={cros_icon} alt="" />
            </div>
            <hr />
            </React.Fragment>
        })}
      </div>
    </div>
  );
};

export default ListProduct;
