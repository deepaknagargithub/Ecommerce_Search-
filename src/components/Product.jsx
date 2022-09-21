import React from "react";

function Product(props) {
  const item = props.product;
  return (
    <div className="productcontainer">
      <div className="product">
        <img src={item.img} alt="img" className="img" />
        <div>
          {" "}
          <h3>{item.title}</h3>
        </div>
        <div> RS:{item.price}</div>
      </div>
    </div>
  );
}

export default Product;
