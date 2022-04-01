import React from "react";
import Link from "react-router-dom/Link";
import { connect } from "react-redux";


const Loader = () => {

    return (
        <div className="loader" style={{marginTop: "220px"}}></div>
    )
  
}

const mapStateToProps = (state) => ({
    loader: state.posts.loader
  });


export default connect(mapStateToProps)(Loader);