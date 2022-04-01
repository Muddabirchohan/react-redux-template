import React, { useEffect } from "react";
import { addToCart, fetchPosts } from "../actions/PostActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  if(props.loader){
    return (
        <div className="loader"></div>

    )
  }

  return (
    <div className="parent-products">
      {props &&
        props.items.map((item,index) => {
          return (
          
            <div key={index} className="products-individual">
                <Link  to={`/product/${item.id}`}>
              <img  src={item.image} style={{width: "400px"}}/>
              {/* <div className="tags"> 
              <span className="price-tag"><a href="#">{item.price}</a></span>
              </div>  */}
              </Link>

            </div>
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
