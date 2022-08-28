import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../src/styles/Components/Cart.css";

const ModalCart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    loadItems();
  }, []);

  var totalPrice = 0;

  const loadItems = async () => {
    const result = await axios.get("http://localhost:3001/orderitem");
    setItems(result.data);
    result.data.map((prices) => {
      totalPrice += prices.qty * Number(prices.price.replace("N", ""));
    });
    setTotal(totalPrice.toFixed(2));
  };

  const deleteOrder = async (id) => {
    let isDelete = window.confirm(
      "Are you sure? This This item will be removed from your cart!"
    );
    if (isDelete) {
      await axios.delete(`http://localhost:3001/orderitem/${id}`);
      loadItems();
    }
  };

  const incDec = async(a,b,c,d,e) => {
    if (c === "dec") {
      if (a === 1) {
        a = 1;
      } else{
        a -=1; 
      }
    }else {
      if (a === 20) {
        a = 20;
        alert ("Quantity Cannot Exceed 20!");
        return;
      }else{
        a += 1; 
      }
    }
    const order = {name:d, price:e, qty:a};
    await axios.put(`http://localhost:3001/orderitem/${b}`, order);
    loadItems(); 
  };

  return (
    <div>
      <div className="order-area">
        <div className="order-name">Your Cart</div>
      </div>
      {items.map((item, index) => (
        <div className="order-card" key={index}>
          <div className="name-del">
            <div className="order-item">{item.name}</div>
             <button className="delete-btn" onClick={() => deleteOrder(item.id)}>
            Remove
          </button>
          </div>

         
          <div className="order-item">{item.price}</div>

          <div className="order-qty">
            Qty
            <button
              className="qty-btn"
              onClick={() =>
                incDec(item.qty, item.id, "dec", item.name, item.price)
              }
            >
              -
            </button>
            <input type="text" className="qty-input" value={item.qty} />
            <button
              className="qty-btn"
              onClick={() =>
                incDec(item.qty, item.id, "inc", item.name, item.price)
              }
            >
              +
            </button>
          </div>

          <div className="order-price">
            N{(item.qty * Number(item.price.replace("N", ""))).toFixed(2)}
          </div>
          
        </div>
      ))}
      ;
      <div className="order-total">
          <div className="total">Total:</div>
          <div className="total-price">N {total}</div>
      </div>

      <div className="place-order-btn">Place Order</div>
    </div>
  );
};

export default ModalCart;
