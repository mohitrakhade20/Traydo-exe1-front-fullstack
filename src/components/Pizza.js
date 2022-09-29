import React, { useState } from "react";
import "./pizzaStyle.css";

export default function Pizza() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);
  const [discount, setDiscount] = useState();
  const handleChange = () => {
    if (quantity > 0) {
      updatePrice(quantity, !checked);
      setChecked(!checked);
    }
    console.log(checked);
  };

  const updatePrice = (q, c) => {
    let price1 = q * 50;
    if (c) price1 = price1 + 50;

    setPrice(price1);
  };

  return (
    <div className="Pizza">
      <h1 style={{ textAlign: "left", marginLeft: "30px" }}> Pizza ABC</h1>
      <p style={{ textAlign: "left", marginLeft: "30px" }}>
        We are currently serving one pizza only. Please taste and review.
      </p>

      <div className="outer-div">
        <div className="inner-div">
          <p>Add Quanitity</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => {
                setQuantity(quantity + 1);
                updatePrice(quantity + 1, checked);
              }}
            >
              {" "}
              +{" "}
            </button>
            <h4 className="quantity">{quantity} </h4>
            <button
              onClick={() => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                  updatePrice(quantity - 1, checked);
                }
              }}
            >
              {" "}
              -{" "}
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className="checkbox"
              type="checkbox"
            />{" "}
            <h5>Add Ons</h5>
          </div>
        </div>
        <img
          className="pizzaImg"
          src="https://cdn.pixabay.com/photo/2012/04/12/20/43/pizza-30579__340.png"
        />
      </div>

      <div className="footer">
        <div>Total:{price} </div>
        <div>
          <div>Discount:</div>
          <input
            style={{ width: "20px" }}
            value={discount}
            // placeholder
            onChange={(e) => setDiscount(e.target.value)}
            type="text"
          />{" "}
          %
        </div>
        <div>To Pay: {discount ? discount : price}</div>
      </div>
    </div>
  );
}
