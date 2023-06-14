import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

app.use(express.static('public'));

mongoose.connect('mongodb+srv://MaxRabow:Maximo84@cole.xshtick.mongodb.net/?retryWrites=true&w=majority');

app.listen(8080, () => {
    console.log('escuchando 8080')
})