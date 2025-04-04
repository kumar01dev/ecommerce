import express from 'express';
import {Product} from '../model/productModel.js';

const router = express.Router();

// Add new product
router.post('/products', async (req, res) => {
    try{
        // const newProduct = new Product(req.body);
        // await newProduct.save();
        // res.status(201).json(newProduct);
        const { title, price, category, image, size,newArrivalProducts } = req.body;
        const newProduct = new Product({
            title,
            price,
            category,
            image,
            size,
            newArrivalProducts,
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    }catch(error){
        console.log(error.message);
        res.status(404).send({message:error.message});
    }
});

// Get all men products
router.get('/products/men', async (req, res) => {
    try {
        const menProducts = await Product.find({category:'men'});
        res.status(200).json(menProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all women products
router.get('/products/women', async (req, res) => {
    try {
        const menProducts = await Product.find({category:'women'});
        res.status(200).json(menProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all new arrival products
router.get('/products/new-arrivals', async (req, res) => {
    try {
        const menProducts = await Product.find({newArrivalProducts:true});
        res.status(200).json(menProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get each product
router.get('/products/:productId', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;