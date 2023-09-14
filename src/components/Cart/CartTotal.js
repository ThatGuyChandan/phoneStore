import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";
export default function CartTotal({ value, history }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="totalBox">
        <div>
          <div>
            <Link to="/">
              <button
                className="cBtn"
                type="button"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
              <span>SubTotal:</span>
              <strong>${cartSubtotal}</strong>
            </h5>
            <h5>
              <span>Tax:</span>
              <strong>${cartTax}</strong>
            </h5>
            <h5>
              <span>Total:</span>
              <strong>${cartTotal}</strong>
            </h5>
            {/* <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            /> */}
            <button className="payBtn"> Pay Button</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
