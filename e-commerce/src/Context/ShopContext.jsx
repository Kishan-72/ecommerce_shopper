import React, { createContext, useEffect, useState } from "react";
// import all_product from "../component/assets/all_product.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0; // Use product ID instead of index
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:8000/allproduct")
      .then((response) => response.json())
      .then((data) => setAll_product(data));

    if (localStorage.getItem("aut-token")) {
      fetch("http://localhost:8000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "aut-token": `${localStorage.getItem("aut-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  // Add to Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("aut-token")) {
      fetch("http://localhost:8000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "aut-token": `${localStorage.getItem("aut-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ItemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  // Remove from Cart
  const removeCartItem = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 0) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      if (localStorage.getItem("aut-token")) {
        fetch("http://localhost:8000/removefromcart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "aut-token": `${localStorage.getItem("aut-token")}`,
            "Content-Type": `application/json`,
          },
          body: JSON.stringify({ ItemId: itemId }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
      return prev;
    });
  };

  // Get Total Cart Amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
` `;
