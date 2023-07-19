import dotenv from 'dotenv';
import program from './commander.js';

let path = '.env.prod';

if (program.opts().mode == 'prod') {
    path = '.env.prod';
}
dotenv.config({path});

export default {
        PORT:process.env.PORT
};