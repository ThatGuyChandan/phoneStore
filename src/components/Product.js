import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="outCard">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="phone img" className="card-img-top" />
                </Link>
                <button
                  className="addBtn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="" disabled>
                      {" "}
                      inCart
                    </p>
                  ) : (
                    <i className="fa fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
        </div>

        <div className="cardFooter">
          <p>{title}</p>
          <h5>
            <span>$</span>
            {price}
          </h5>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
