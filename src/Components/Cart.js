import React, { Component } from 'react';
import '../App.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateCart } from '../actions/PostActions';
import '../App.css';
import shop from '../images/shop.png';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import CartError from './ErrorHandlers/CartError';

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

    //   const addQuantity = (item) => {
    //     const cartCopy = [...cart]
    //     const cartIndex =  cartCopy.findIndex((obj => obj.id == item.id))
    //     cartCopy[cartIndex].quantity += 1;     
    //     let cartString = JSON.stringify(cartCopy)
    //     localStorage.setItem('cart', cartString)
    //     props.updateCart(item.id,"add")
    //   }

    //   const RemoveQuantity = (item) => {
    //     const cartCopy = [...cart]
    //     const cartIndex =  cartCopy.findIndex((obj => obj.id == item.id))
    //     cartCopy[cartIndex].quantity -= 1;  
    //     const cartString = JSON.stringify(cartCopy)
    //     localStorage.setItem('cart', cartString)
    //     props.updateCart(item.id,"sub")
    //  }

      if(props.cart.length === 0){
          return <CartError/>
      }

        return (

                <div>
                    <div className="cardAllign">
                        <table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>quantity</th>
                                    <th>Remove</th>
                                    <th> Update </th>


                                </tr>
                            </thead>
                            <tbody>
                                {props.cart.map((item, index) => {
                                    return (
                                        <tr key={index}>
              <td> <img  src={item.image} /> </td> 
            <td> <span class="price-tag">{item.price}</span> </td>
            <td> quantiity:  {item.quantity} </td>
            <td> <Button className='btn btn-danger' onClick={()=>removeitemCart(item)}> remove </Button> </td>
            <td> 

            {/* <button onClick={()=>addQuantity(item)}> + </button> 
            <button onClick={()=>RemoveQuantity(item)}> - </button>  */}
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