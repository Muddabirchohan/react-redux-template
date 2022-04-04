import {
    FETCH_POSTS,
    NEW_POST,
    ADD_TO_CART,
    REMOVE_POST,
    GET_SINGLE_PRODUCT,
    GET_QUANTITY,
    USER_AUTHENTICATION,
    FETCH_POSTS_LOADER,
    FETCH_POST,
    FETCH_POST_LOADER,
    UPDATE_CART
} from '../actions/types';
import localCart from '../utils/cartPersistLocalStorage';


const initialState = {

    items: [],
    item: {},
    cart: [],
    description: {},
    quantity: 1,
    addedIds: [],
    itemremoved: [],
    totalPrice: [],
    cartPrices: [],
    cartCounter: 0,
    username: 'muddabir',
    password: 'chohan',
    laoder: false,
    loaderSingle: false

};


export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload.data
            }

            case FETCH_POSTS_LOADER:
                return {
                    ...state,
                    loader: action.payload
                }

                case FETCH_POST:
                    return {
                        ...state,
                        item: action.payload.data
                    }

                    case FETCH_POST_LOADER:
                        return {
                            ...state,
                            loaderSingle: action.payload
                        }

                        case NEW_POST:
                            return {
                                ...state,
                                item: action.payload
                            }

                            case ADD_TO_CART:
                                // state.cart = localCart || state.cart;
                                return {
                                    ...state,
                                    cart: [...state.cart, action.mycart],
                                }


                                case GET_SINGLE_PRODUCT:
                                    return {
                                        ...state,
                                        description: action.obj
                                    }



                                    case REMOVE_POST:
                                        // state.cart = localCart || state.cart;
                                        return {
                                            ...state,
                                            cart: state.cart.filter(item => item !== action.object),
                                        }

                                        case UPDATE_CART:
                                            // state.cart = localCart || state.cart;
                                            const updatedCart = state.cart.map(cartItem => {
                                                if (cartItem.id === action.id) {
                                                    return {
                                                        ...cartItem,
                                                        quantity: action.actionType === "add" ? cartItem.quantity + 1 : cartItem.quantity - 1
                                                    }
                                                }
                                                return cartItem
                                            })

                                            return {
                                                ...state,
                                                cart: updatedCart
                                            }


                                            case GET_QUANTITY:
                                                return {
                                                    ...state,
                                                    quantity: action.myquantity,
                                                        id: action.myid
                                                }

                                                case USER_AUTHENTICATION:
                                                    return {
                                                        ...state,
                                                        username: action.name,
                                                            password: action.password
                                                    }

                                                    default:
                                                        return state;
    }
}