import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
        <h3>Room Categories</h3>
        <div className="items">
        <div className="item">
          <button className="label" >
            <Link to='/category/c1' className="link">SINGLE BED</Link>
            </button>
          <img src="https://media.istockphoto.com/id/1336925615/photo/a-guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-rental-small-cottage.jpg?b=1&s=170667a&w=0&k=20&c=ljrPWZC6tIyrBbt58jguTJyMNIo14C5n7ValE84mAf8=" />
        </div>
        <div className="item">
          <button className="label">
          <Link to='/category/c2' className="link">DOUBLE BED</Link>
          </button>
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG91YmxlJTIwYmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
        </div>
      <div className="item">
        <button className="label">
        <Link to='/category/c3' className="link">FAMILY ROOM</Link>
        </button>
        <img src="https://images.unsplash.com/photo-1606074280798-2dabb75ce10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhbWlseSUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />

      </div>
      </div>
    </div>
  );
};

export default Categories;