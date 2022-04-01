import {
    FETCH_POSTS,
    NEW_POST,
    GET_SINGLE_PRODUCT,
    ADD_TO_CART,
    REMOVE_POST,
    GET_QUANTITY,
    USER_AUTHENTICATION,
    FETCH_POSTS_LOADER,
    FETCH_POST,
    FETCH_POST_LOADER,
    UPDATE_CART
} from './types';

import axios from 'axios';



export const fetchPosts = () => dispatch => {


    dispatch({
        type: FETCH_POSTS_LOADER,
        payload: true
    })

    axios.get("https://fakestoreapi.com/products")
        .then(posts => {
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
            dispatch({
                type: FETCH_POSTS_LOADER,
                payload: false
            })
        }).catch(ex => dispatch({
            type: FETCH_POSTS_LOADER,
            payload: false
        }))
}

export const fetchPost = (id) => dispatch => {


    dispatch({
        type: FETCH_POSTS_LOADER,
        payload: true
    })

    axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(posts => {
            dispatch({
                type: FETCH_POST,
                payload: posts
            })
            dispatch({
                type: FETCH_POST_LOADER,
                payload: false
            })
        }).catch(ex => dispatch({
            type: FETCH_POST_LOADER,
            payload: true
        }))
}



export const getSingleProduct = (id) => dispatch => {

    dispatch({
        type: GET_SINGLE_PRODUCT,
        obj: id
    })
}


export const addToCart = (product, id) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        mycart: product,
        addedId: id
    })
}


export const updateCart = (id,actionType) => dispatch => {
    dispatch({
        type: UPDATE_CART,
        id,
        actionType

    })
}

export const removeFromCart = (obj) => dispatch => {
    dispatch({
        type: REMOVE_POST,
        object: obj
    })
}


export const getQuantity = (obj) => dispatch => {

    dispatch({
        type: GET_QUANTITY,
        myid: obj._id,
        myquantity: obj.price
    })
}


export const userAuthentication = (username, upassword) => dispatch => {

    dispatch({
        type: USER_AUTHENTICATION,
        name: username,
        password: upassword
    })
}





export const createPosts = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
}