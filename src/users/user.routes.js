import { Router } from 'express';
import { userDao } from '../users/user.dao.js';
import { hashPassword, comparePassword } from '../../utils/hash.utils.js';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
	try {
		const user = await userDao.getAllUser();
		res.send(user);
	} catch (err) {
		res.status(500).send({ err });
	}
});

userRouter.post('/', async (req, res) => {
	const users = { ...req.body, password: hashPassword(req.body.password)};
	try {
		const userAdd = await userDao.addUser(users);
		delete userAdd.password;
		res.send(201).json(userAdd);
	} catch (error) {
		res.status(500).send({ error });
	}
});

userRouter.post('/auth', async (req, res)=>{
	const { email, password } = req.body;
	try {
		const user = await userDao.getByEmail(email)
		if (!user) throw new Error ('invalid data');
		console.log(comparePassword(user, password));
		if (!comparePassword(user, password)) throw new Error ('invalid data');
		req.session.user = user;
		res.redirect('/');
	} catch (error) {
		res.status(400).json ({error: error.message});
	}
})

userRouter.delete('/:uid', async (req, res) => {
	const uid = req.params.uid;
	try {
		await userDao.removeUser(uid);
		res.send(204);
	} catch (err) {
		res.status(500).send({ err });
	}
});

export default userRouter;