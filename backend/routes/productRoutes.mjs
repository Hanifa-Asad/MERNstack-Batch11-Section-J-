// Import necessary modules
import express from 'express';
const router = express.Router();
import multer from 'multer';
import Product from '../models/Product.mjs';


const upload = multer({ dest: 'uploads/' });

// POST route for creating a new product
router.post('/', upload.single('image'), async (req, res) => {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.path : '';

    const newProduct = new Product({ name, price, description, image });
    await newProduct.save();
    res.status(201).send(newProduct);
});

// GET route for retrieving products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.status(200).send(products);
});

// Export the router
export default router;