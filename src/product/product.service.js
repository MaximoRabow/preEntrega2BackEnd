import { productModel } from "../product/product.model.js";

class ProductService {
	constructor() {
		this.model = productModel;
	}

	async getAllProduct() {
		return await this.model.find().lean();
	}

	async addProduct(product) {
		return await this.model.create(product);
	}

	async removeProduct(productId) {
		return this.model.deleteOne({ _id: productId });
	}

	async getProductByID(productId) {
		return await this.model.findOne({ _id: productId });
	}
}

export const productService = new ProductService();