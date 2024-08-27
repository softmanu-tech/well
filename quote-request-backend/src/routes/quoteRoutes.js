"use strict";
// src/routes/quoteRoutes.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Quote_1 = __importDefault(require("../models/Quote"));
const router = express_1.default.Router();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newQuote = new Quote_1.default(req.body);
        const savedQuote = yield newQuote.save();
        res.status(201).json(savedQuote);
    }
    catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'An error occurred' });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quotes = yield Quote_1.default.find();
        res.json(quotes);
    }
    catch (err) {
        res.status(500).json({ message: err instanceof Error ? err.message : 'An error occurred' });
    }
}));
exports.default = router;
