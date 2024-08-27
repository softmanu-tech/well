// src/models/Quote.ts

import mongoose, { Document, Schema } from 'mongoose';

interface IQuote extends Document {
  name: string;
  email: string;
  service: string;
  message: string;
  createdAt: Date;
}

const QuoteSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IQuote>('Quote', QuoteSchema);

// At the end of src/models/Quote.ts
QuoteSchema.index({ email: 1 });
QuoteSchema.index({ createdAt: -1 });