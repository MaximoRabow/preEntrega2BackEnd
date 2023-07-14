import { userModel } from '../users/user.model.js'

class UserService {
	constructor() {
		this.model = userModel;
	}

	async getAllUser() {
		return await this.model.find().lean();
	}

	async addUser(users) {
		return await this.model.create(users);
	}

	async removeUser(userId) {
		return this.model.deleteOne({ _id: userId });
	}

	async getUserByID(userId) {
		return await this.model.findOne({ _id: userId });
	}
}

export const userService = new UserService();