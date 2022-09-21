import React from "react";
import axious from "axios";
import Product from "./Product";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Search() {
  const [products, setProducts] = useState([]);
  const handlechange = async () => {
    const res = await axious.get("http://localhost:3000/products");
    setProducts(res.data);
  };
  const handleFilter1 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const filter = products.filter((item) => item.category === e.target.value);
    setProducts(filter);
  };
  const handleFilter2 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const filter = products.filter((item) => item.price <= e.target.value);
    setProducts(filter);
  };
  const handleFilter3 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const filter = products.filter((item) => item.brand === e.target.value);
    setProducts(filter);
  };
  const handleFilter4 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const filter = products.filter((item) => item.color === e.target.value);
    setProducts(filter);
  };
  return (
    <div className="container">
      <div className="section1">
        <div className="filter">
          <label for="category">Filter By Category</label>
          <form id="category" onChange={handleFilter1}>
            <span>Mens</span>
            <input type="checkbox" value="men" />
            <span>Womens</span>
            <input type="checkbox" value="women" />
            <span>Kids</span>
            <input type="checkbox" value="kid" />
          </form>
          <label>Filter By Price</label>
          <form id="category" onChange={handleFilter2}>
            <span>3000</span>
            <input type="checkbox" value="3000" />
            <span>1000</span>
            <input type="checkbox" value="1000" />
            <span>5000</span>
            <input type="checkbox" value="5000" />
          </form>
          <label>Filter By Brand</label>
          <form id="category" onChange={handleFilter3}>
            <span>Mens</span>
            <input type="checkbox" value="men" />
            <span>Womens</span>
            <input type="checkbox" value="women" />
            <span>Kids</span>
            <input type="checkbox" value="kid" />
          </form>
          <label>Filter By Color</label>
          <form id="category" onChange={handleFilter4}>
            <span>Red</span>
            <input type="checkbox" value="red" />
            <span>Green</span>
            <input type="checkbox" value="green" />
            <span>Blue</span>
            <input type="checkbox" value="blue" />
          </form>
        </div>
        <input
          className="searchbar"
          type="text"
          placeholder="Search for products"
          onChange={handlechange}
        />
        <SearchIcon id="searchicon" />
      </div>
      <div className="section2">
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
