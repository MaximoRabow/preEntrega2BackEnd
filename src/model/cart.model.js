import mongoose from 'mongoose';
import { productSchema } from './product.model.js';

const cartScheme = new mongoose.Schema({
	name: String,
	year: Number,
	product: {
		type: [productSchema],
		require: false,
		default: [],
	},
});

export const cartModel = mongoose.model('cart', cartScheme);