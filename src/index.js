import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux';
import { BrowserRouter , Switch ,Route} from 'react-router-dom';
import store from './Store'
import Cart from './Components/Cart';
import productsList from './Components/productsList';
import Layout from "./Components/Layout";
import ProductDescription from './Components/ProductDescription';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<div className='container-fluid'>
    <ToastContainer />
<Provider store={store}> 
<BrowserRouter >

<Layout>

    <Switch> 
    <Route path="/" component={productsList} exact={true}> </Route>
    <Route path="/products" component={productsList}> </Route>
    <Route path="/product/:id" component={ProductDescription}> </Route>
    <Route path="/cart" component={Cart}> </Route>
    </Switch>
    </Layout>

    </BrowserRouter>
    </Provider></div>,
     document.getElementById('root'));
registerServiceWorker();
