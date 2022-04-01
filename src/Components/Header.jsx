import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header">
        {/* <a href="#default" class="logo">Fake Store </a> */}
        <Link to="/" className="header-head">
          {" "}
          F-STORE{" "}
        </Link>
        <div className="header-right">
          <Link to="/home" className="header-sub-head">
            {" "}
            Home{" "}
          </Link>
          <Link to="/products" className="header-sub-head">
            {" "}
            Products{" "}
          </Link>
          <CartIcon />
        </div>
      </div>
    </div>
  );
};
export default Header;
