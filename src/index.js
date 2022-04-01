import React from 'react';
import './index.css';
import { Provider} from 'react-redux';
import { BrowserRouter , Switch ,Route} from 'react-router-dom';
import store from './Store'
import Cart from './Components/Cart';
import ProductsList from './Components/productsList';
import Layout from "./Components/Layout";
import ProductDescription from './Components/ProductDescription';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<div className='container-fluid'>
    <ToastContainer />
<Provider store={store}> 
<BrowserRouter >

<Layout>

    <Switch> 
    <Route exact path="/" render={() => <ProductsList />} />
    <Route path="/products" render={() => <ProductsList />}/>
    <Route path="/product/:id" render={(props) => <ProductDescription {...props}/>}/>
    <Route path="/cart" render={() => <Cart />}/>
    </Switch>
    </Layout>

    </BrowserRouter>
    </Provider></div>);
