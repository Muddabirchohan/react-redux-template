import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cartIcon from "./../images/cart.jpg"
import localCart from "../utils/cartPersistLocalStorage";

const CartIcon = (props) => {
  return <Link to="/cart"> <img style={{width: "30px",height: "30px"}} src={cartIcon}/> {props?.cart?.length}  </Link>
};

const mapStateToProps = (state) => ({
  cart: state.posts.cart,
});

export default connect(mapStateToProps)(CartIcon);
