// src/routes/quoteRoutes.ts

import express, { Request, Response } from 'express';
import Quote from '../models/Quote';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (err) {
    res.status(400).json({ message: err instanceof Error ? err.message : 'An error occurred' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : 'An error occurred' });
  }
});

export default router;