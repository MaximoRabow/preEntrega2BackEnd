import UserRepository from "./user.repository.js";
import config from '../config/enviroment.js';

const userService = new UserRepository(config.userDAO);

export default userService;


