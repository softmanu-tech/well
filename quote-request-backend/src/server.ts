// src/server.ts

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import quoteRoutes from './routes/quoteRoutes';

dotenv.config();

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '5000');
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    optionsSuccessStatus: 200
  };
  
  app.use(cors(corsOptions));

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/quotes', quoteRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
// TODO: Add routes here

app.get('/', (req: Request, res: Response) => {
  res.send('Quote Request API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});