import React, { useEffect, useState } from "react";
import "./NewCollections.css";
// import new_collection from "../assets/new_collections";
import Items from "../Item/Items";

const NewCollections = () => {
const [new_collection, setNew_Collection]= useState([]);

useEffect(()=>{
  fetch('http://localhost:8000/newcollection')
  .then((response)=>response.json())
  .then((data)=>setNew_Collection(data));
},[])

  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
