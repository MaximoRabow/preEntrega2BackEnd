export default class UserRepository {
    constructor(dao) {
        this.dao = dao
    }

    async getUsers() {
        return await this.dao.getAll();
    }

    async getUserById(params) {
        return await this.dao.getBy(params);
    }

    async getByEmail(email) {
        return await this.dao.getByEmail(email)
    }
        
    async addUser(user) {
        return await this.dao.save(user);
    }

    async updateUser(id, user) {
        return await this.dao.update(id, user);
    }

    async removeUser(userId) {
        return await this.dao.deleteOne(userId);
    }
}