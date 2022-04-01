import React, { useEffect } from "react";
import { addToCart, fetchPosts } from "../actions/PostActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  console.log("props",props)
  useEffect(() => {
    props.fetchPosts();
  }, []);

  if(props.loader){
    return (
        <div class="loader"></div>

    )
  }

  return (
    <div className="parent-products">
      {props &&
        props.items.map((item) => {
          return (
            <Link to={`/product/${item.id}`}>
            <div className="products-individual">
              <img  src={item.image} style={{width: "400px"}}/>
              <div className="tags"> 
              <span class="price-tag"><a href="javascript:void()">{item.price}</a></span>
              </div> 
            </div>
            </Link>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.posts.items,
  loader: state.posts.loader
});

export default connect(mapStateToProps, { addToCart, fetchPosts })(
  ProductsList
);
