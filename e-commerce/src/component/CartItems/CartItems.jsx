import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeCartItem, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div className="cartitems-format cartitem-format-main" key={e.id}> 
                
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeCartItem(e.id)}
                  alt=""
                />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
              <div className="cartitems-totalitem">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-totalitem">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-totalitem">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3> {/* ✅ Show final amount */}
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code, enter it here.</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="Promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
