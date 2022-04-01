import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="row">
      <div> 
      <Header/>
      </div> 


{/* sidebar commented as not needed yet */}
      {/* <div>
            <ul>
              <li>
                <Link to={"/Jeans"}>Jeans</Link>
              </li>
              <li>
                <Link to={"/tShirts"}>T-Shirts</Link>
              </li>
              <li>
                <Link to={"/shredded"}>shredded</Link>
              </li>
            </ul>

        </div>  */}
       
            <div className="column2">{props.children}</div>
    </div>
  );
};
export default Layout;
