import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('image', formData.image);
        
        await axios.post('/api/products', formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        // Optionally reset the form after submission
        setFormData({
            name: '',
            price: '',
            description: '',
            image: null,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
            <textarea name="description" placeholder="Description" onChange={handleChange} required />
            <input type="file" name="image" onChange={handleChange} required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;