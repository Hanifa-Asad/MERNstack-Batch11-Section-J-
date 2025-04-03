import React, { useEffect, useState } from 'react';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            {products.map((product) => (
                <div key={product._id}>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <p>{product.description}</p>
                    {product.image && <img src={product.image} alt={product.name} />}
                </div>
            ))}
        </div>
    );
};

export default ProductList;