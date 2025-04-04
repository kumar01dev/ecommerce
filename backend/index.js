import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router  from './routes/product.routes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors());
app.use(cors({
  origin: 'https://ecommerce-frontend-two-delta.vercel.app', // Allow only your frontend domain while in production/deployment
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

// the route for products
app.use('/api', router);

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URI;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`MongoDB connected & Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });