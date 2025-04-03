import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const App = () => {
    return (
        <div>
            <h1>Add a New Product</h1>
            <ProductForm />
            <h1>Product List</h1>
            <ProductList />
        </div>
    );
};

export default App;