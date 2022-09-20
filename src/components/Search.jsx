import React from "react";
import axious from "axios";
import Product from "./Product";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Search() {
  const [products, setProducts] = useState([]);
  const handlechange = async () => {
    try {
      const res = await axious.get("http://localhost:3000/products");
      console.log(res);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="section1">
        <input
          className="searchbar"
          type="text"
          placeholder="Search for products"
          onChange={handlechange}
        />
        <SearchIcon id="searchicon" />
      </div>

      <div className="section2">
        <div className="filter">
          <input type="checkbox" id="" name="" value="" />
          <label for="vehicle1"> I have a bike</label>
          <input type="checkbox" id="" name="" value="" />
          <label for="vehicle2"> I have a car</label>
          <input type="checkbox" id="" name="" value="" />
          <label for="vehicle3"> I have a boat</label>
        </div>

        <div className="mapproduct">
          {products.map((item) => (
            <Product product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
