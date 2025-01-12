// (for dev phase)

import { Router } from 'express';
import { User } from '../../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const getAllUsers = async (_req, res) => {
    try {
        const users = await User.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        res.json(users);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getOneUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    } 
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

// For development

const createUsers = async (_req, res) => {
    try {
        User.bulkCreate([
            {
                first_name: 'Ashley',
                last_name: 'Hayes',
                username: 'ashleymh060504',
                password: 'password',
                email: 'ashleymh060504@gmail.com'
            },
            {
                first_name: 'Mathew',
                last_name: 'Lopez',
                username: 'duzinhoml',
                password: 'password',
                email: 'mathewlopez10@gmail.com'
            },
            {
                first_name: 'Javier',
                last_name: 'Lopez',
                username: 'javylopez--20',
                password: 'password',
                email: 'javylopez98@hotmail.com'
            },
            {
                first_name: 'Dalya',
                last_name: 'Kablawi',
                username: 'DalyaKablawi',
                password: 'password',
                email: 'dalyakablawi@gmail.com'
            },
            {
                first_name: 'Martin',
                last_name: 'Rojo',
                username: 'Martin-rojo',
                password: 'password',
                email: 'Martin.rojo27@gmail.com'
            },
        ]);
        res.status(200).json({ message: 'User data seeded'});
    } 
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

dotenv.config();

const router = Router();


// Get All Users

router.get('/', getAllUsers);

// Get One User

router.get('/:id', getOneUser);

// Create Users (Dev)

router.post('/seed', createUsers);

export { router as userRouter };