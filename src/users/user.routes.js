import { Router } from 'express';
import { userService } from '../users/user.service.js';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
	try {
		const user = await userService.getAllProduct();
		res.send(user);
	} catch (err) {
		res.status(500).send({ err });
	}
});

userRouter.post('/', async (req, res) => {
	const users = req.body;
	try {
		const userAdd = await userService.addProduct(users);
		res.send(userAdd);
	} catch (err) {
		res.status(500).send({ err });
	}
});

userRouter.delete('/:uid', async (req, res) => {
	const uid = req.params.uid;
	try {
		await userService.removeProduct(uid);
		res.sendStatus(204);
	} catch (err) {
		res.status(500).send({ err });
	}
});

export default userRouter;