import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';
import { addPost } from "../actions/PostActions";


const AddProduct = (props) => {

  const [state, setState] = React.useState({})
    
  const onChangeEvent = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name] : value
    });
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.addPost(state)

  }


    return (
      <div>    
        
        <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name="title" placeholder="Enter  title" onChange={onChangeEvent} />  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" name="price" placeholder="Enter  price" onChange={onChangeEvent} />  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" name="description" placeholder="Enter description" onChange={onChangeEvent} />  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" name="image" placeholder="Enter Image" onChange={onChangeEvent} />  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Category</Form.Label>
    <Form.Control type="text" name="category" placeholder="Enter Category" onChange={onChangeEvent}/>  
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </div>
    );
}

const mapStateToProps = () => {
  return{

  }
}

export default connect(mapStateToProps,{addPost})(AddProduct);
