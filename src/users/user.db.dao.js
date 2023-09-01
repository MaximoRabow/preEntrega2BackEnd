import { userModel } from './user.model.js'

class Userdao {
	constructor() {
		this.model = userModel;
	}

	async getAllUser() {
		try {
			return await this.model.find().lean();
		} catch(error) {
			return null;
		}	
	}

	async getUserById(userId) {
		try {
			return await this.model.findOne({ _id: userId });
		} catch(error) {
			return null;
		}	
	}

	async getByEmail(email) {
		try {
			return await this.model.findOne(email);
		} catch {
			return null;
		}
	}

	async addUser(user) {
		try {
			return await this.model.create(user);
		} catch(error) {
			return null;
		}
		
	}

	async removeUser(userId) {
		try {
			return this.model.deleteOne({ _id: userId });
		} catch(error) {
			return null;
		}
		
	}
}

export const userDao = new Userdao();