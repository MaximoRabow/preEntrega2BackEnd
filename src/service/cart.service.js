import { cartModel } from '../model/cart.model.js';
import { productService } from './product.service.js';

class CartService {
	constructor() {
		this.model = cartModel;
	}

	async addCart(cart) {
		cart.product = [];
		return await this.model.create(cart);
	}

	async getAllCart() {
		return await this.model.find().lean();
	}

	async addProductCart(cartId, productId) {
		const cart = await this.model.findOne({ _id: cartId });
		const product = await productService.getproductByID(productId);
		cart.product.push(product);
		return await cart.save();
	}
}

export const cartService = new CartService();