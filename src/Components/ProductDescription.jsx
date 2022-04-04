import React, { useEffect } from "react";
import { addToCart, fetchPost,updateCart } from "../actions/PostActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from 'react-bootstrap';


const ProductDescription = (props) => {
  const [itemId, setItemId] = React.useState(props.match.params.id);

  useEffect(() => {
    props.fetchPost(itemId);
  }, [itemId]);

  const addToCartHandler = () => {
    const {cart,item} = props;
  
    // let cartUpdated = JSON.parse(localStorage.getItem("cart")) || cart;
    // let cartCopy = [...cartUpdated];
  
    let {id} = item;
    
    let existingItem = cart?.find(cartItem => cartItem.id == id);
    
    if (existingItem) {
        existingItem.quantity += 1
        props.updateCart(id)
        toast.warn(`${item.title} already exist `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    } else { 
      // cart.push(item)
      item.quantity =  1 // for redux cart quantiity
      props.addToCart(item,id);
      toast.success(`${item.title} added `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    }
    
    // let stringCart = JSON.stringify(cartCopy);
    // localStorage.setItem("cart", stringCart)

  };


  


  const {
    category,
    description,
    id,
    image,
    price,
    rating,
    // rating: { rate, count },
    title,
  } = props.item;

  return (
    <div className="container">
      <div className="row"> 
      <div className="col col-lg-6"> 
      <p>
        {" "}
        <img src={image} style={{height: "100%"}} />{" "}
      </p>
      </div>

<div className="col col-lg-6">
      <h2 className="pdp-name"> 
      <span>{category}</span>
       </h2>
       <h2> 
      <span>{price} $</span>
       </h2>
      <p>{description} </p>
      <p>
        <Button className="btn btn-primary" onClick={addToCartHandler}>
          Add to Cart
        </Button>
      </p>
      </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.posts.item,
  loader: state.posts.loaderSingle,
  cart: state.posts.cart,
});

export default connect(mapStateToProps, { addToCart, fetchPost ,updateCart})(
  ProductDescription
);
