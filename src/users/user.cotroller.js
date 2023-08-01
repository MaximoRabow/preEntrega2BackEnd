import { UserDao, userDao } from "./user.dao.js";

const userController = new UserDao();

export const getAllUser = async(req, res) =>{
    const user = await userDao.getAllUser();

    if(!user) {
        res.status(500).json({status: 'error', message: 'Error de servidor'});
    }
    res.send({status: 'success', payload: user})
}

export const getUserByID = async(req, res)=>{
    const id = req.params.body;
    const user = await userDao.getUserByID(id);
    
    if(!user) {
        res.status(500).json({status: 'error', message: 'Error de servidor'});
    }
    res.send({status: 'success', payload: user})
}

export const getByEmail = async(req, res)=>{
    const email = req.params.body;
    const user = await userDao.getByEmail(email);
    
    if(!user) {
        res.status(500).json({status: 'error', message: 'Error de servidor'});
    }
    res.send({status: 'success', payload: user})
}

export const addUser = async(req, res)=> {
    const body = req.body;
    const user = await userDao.create(body);

    if(!user) {
        res.status(500).json({status: 'error', message: 'Error de servidor'});
    }
    res.sendStatus({status: 'success', payload: user})
}

export const removeUser = async(req, res) =>{
    const id = req.params.body;
    const user = await userDao.getUserByID(id);

    if(!user) {
        res.status(500).json({status: 'error', message: 'Error de servidor'});
    }
    res.send({status: 'success', payload: user})
}

