"use strict";
// src/server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const quoteRoutes_1 = __importDefault(require("./routes/quoteRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT || '5000');
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3001',
    optionsSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/quotes', quoteRoutes_1.default);
// Connect to MongoDB
mongoose_1.default.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));
// Routes
// TODO: Add routes here
app.get('/', (req, res) => {
    res.send('Quote Request API is running');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
