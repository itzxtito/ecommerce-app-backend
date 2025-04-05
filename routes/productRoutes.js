import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// GET single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// POST create a product
router.post('/', async (req, res) => {
  const { name, description, price, image, category, inStock } = req.body;

  try {
    const newProduct = new Product({ name, description, price, image, category, inStock });
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Invalid product data', error: err });
  }
});

export default router;
