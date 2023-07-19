import { Router } from 'express';
import { userService } from '../users/user.service.js';
import { hashPassword, comparePassword } from '../../utils/hash.utils.js';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
	try {
		const user = await userService.getAllUser();
		res.send(user);
	} catch (err) {
		res.status(500).send({ err });
	}
});

userRouter.post('/', async (req, res) => {
	const users = { ...req.body, password: hashPassword(req.body.password)};
	try {
		const userAdd = await userService.addUser(users);
		delete userAdd.password;
		res.send(201).json(userAdd);
	} catch (error) {
		res.status(500).send({ error });
	}
});

userRouter.post('/auth', async (req, res)=>{
	const { email, password } = req.body;
	try {
		const user = await userService.getByEmail(email)
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
		await userService.removeUser(uid);
		res.sendStatus(204);
	} catch (err) {
		res.status(500).send({ err });
	}
});

export default userRouter;