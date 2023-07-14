import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import passport from 'passport';

import productRouter from './product/product.routes.js';
import cartRouter from './cart/cart.routes.js';
import userRouter from './users/user.routes.js';
import viewsRouter from '../views/views.routes.js';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', 'views/');


app.use(express.static('public'));

app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/user', userRouter);
app.use('/', viewsRouter);

mongoose.connect(
	'mongodb+srv://MaxRabow:Maximo84@cole.xshtick.mongodb.net/?retryWrites=true&w=majority'
);

app.listen(8080, () => {
	console.log('8080');
});