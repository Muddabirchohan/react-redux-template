import React, { Component } from 'react';
import '../App.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateCart } from '../actions/PostActions';
import '../App.css';
import shop from '../images/shop.png';
import { toast } from 'react-toastify';
import { Button ,ButtonGroup} from 'react-bootstrap';
import CartError from './ErrorHandlers/CartError';
import dustbinIcon from "./../images/dustbin.jpg"


const Cart = (props) => {

    // let localCart = localStorage.getItem("cart");
    // const [cart,setCart] = React.useState(props.cart);

    // React.useEffect(() => {
    //     localCart = JSON.parse(localCart);
    //     if (localCart) setCart(localCart)
        
    //   }, []) 
        


      const removeitemCart = (item) => {
        // let cartCopy = [...cart]
        // cartCopy = props.cart.filter(item => item.id != item.id);
        // let cartString = JSON.stringify(cartCopy)
        // localStorage.setItem('cart', cartString)
        props.removeFromCart(item)
        toast.info(`${item.title} removed `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }

      const addQuantity = (item) => {
   
        props.updateCart(item.id,"add")
        toast.success(`Cart Updated`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }

      const RemoveQuantity = (item) => {

        props.updateCart(item.id,"sub")
        toast.success(`Cart Updated`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
     }

      if(props.cart.length === 0){
          return <CartError/>
      }

        return (

                <div>
                    <div className="cardAllign">
                        <table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Display</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                    <th> quantity </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.cart.map((item, index) => {
                                    return (
                                        <tr key={index}>

              <td> <img  src={item?.image} style={{objectFit: "contain"}}/> </td> 
              <td> {item?.title} </td> 

            <td> <span className="price-tag">{item?.price * item?.quantity}</span> </td>
            <td> <Button style={{backgroundColor: "white",border: "white"}} onClick={()=>removeitemCart(item)}> <img style={{width: "30px",height: "30px"}} src={dustbinIcon}/> </Button> </td>
            <td> <ButtonGroup aria-label="Basic example">
            <Button onClick={()=>addQuantity(item)}> + </Button> 
            <span style={{padding: '5px'}}>   {item?.quantity} </span>
            <Button disabled={item?.quantity <=1} onClick={()=>RemoveQuantity(item)}> - </Button> 
</ButtonGroup>

          
            </td>
            </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        cart: state.posts.cart
        }
}


export default connect(mapStateToProps, { removeFromCart,updateCart})(Cart);