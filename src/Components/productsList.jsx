import React, { useEffect } from "react";
import { addToCart, fetchPosts } from "../actions/PostActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  if (props.loader) {
    return <div className="loader"></div>;
  }

  return (
    <div className="parent-products">
      {props &&
        props.items.map((item, index) => {
          return (
            <div key={index} className="products-individual">
              <Link to={`/product/${item.id}`}>
              <div class="container">
                <div class="tag">{item?.price}</div>
                <img src={item.image} style={{ objectFit: "contain" }} />
              </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.posts.items,
  loader: state.posts.loader,
});

export default connect(mapStateToProps, { addToCart, fetchPosts })(
  ProductsList
);
