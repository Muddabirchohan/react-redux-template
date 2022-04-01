import React from "react";
import Link from "react-router-dom/Link";

export default  () => {
  return (
    <div className="container">
      <div
        style={{ justifyContent: "center", display: "block",marginLeft:"550px" }}
      >
       <p> No items in your Active Cart</p>
      <p> <Link to="/products"> Go to Shopping </Link></p>
      </div>

    </div>
  );
};

