import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="cartInfo">
      <div className="xy">
        <img src={img} alt="phone img" />
      </div>
      <div className="yz">
        <span> Product:</span>
        {title}
      </div>
      <div className="yz">
        <span>Price:</span>${price}
      </div>
      <div className="btnBox">
        <div>
          <div>
            <span className="btn3" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn3">{count}</span>
            <span className="btn3" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="delete">
        <div onClick={() => removeItem(id)}>
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </div>
      </div>
      <div className="yz">
        Item Total : <span>${total}</span>
      </div>
    </div>
  );
}
