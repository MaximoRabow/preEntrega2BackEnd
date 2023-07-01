import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	categoria: {
		type: String,
		required: true,
	},
	cantidad: {
		type: Number,
		required: true,
		unique: true,
	},
	precio: {
		type: String,
		required: true,
	},
});

export const productModel = mongoose.model('product', productSchema);