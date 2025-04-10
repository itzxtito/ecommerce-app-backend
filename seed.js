// seed.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import products from './data/products.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany(); // Clears all existing data
    await Product.insertMany(products); // Inserts new seed data
    console.log('✅ Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Failed to seed database:', err);
    process.exit(1);
  }
};

seedData();
