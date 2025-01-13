import { Router } from 'express';
import { User } from '../../models/index.js';
// import bcrypt from 'bcrypt';

// GET
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const getAllUsers = async (_req, res) => {
    try {
        const users = await User.findAll({
            attributes: {
                exclude: ['password']
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
        const user = await User.findByPk(id, {
            attributes: {
                exclude: ['password']
            }
        });
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

// POST

// Work our way up

const createUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = await User.create({ email, password });
        res.status(201).json(newUser);
    } 
    catch (err) {
        res.status(400).json({message: err.message});
    }
}

// const createUser = async (req, res) => {
//     try {
//         const newProfile = req.body;
//         newProfile.password = await bcrypt.hash(newProfile.password, 10);
//         const userData = await User.create(newProfile);
//         res.status(201).json(userData);
//     } 
//     catch (err) {
//         res.status(400).json(err);
//     }
// };

// (for development)

const createUsers = async (_req, res) => {
    try {
        User.bulkCreate([
            {
                first_name: 'Ashley',
                last_name: 'Hayes',
                password: 'password',
                email: 'ashleymh060504@gmail.com'
            },
            {
                first_name: 'Mathew',
                last_name: 'Lopez',
                password: await bcrypt.hash('password', 10),
                email: 'mathewlopez10@gmail.com'
            },
            {
                first_name: 'Javier',
                last_name: 'Lopez',
                password: 'password',
                email: 'javylopez98@hotmail.com'
            },
            {
                first_name: 'Dalya',
                last_name: 'Kablawi',
                password: 'password',
                email: 'dalyakablawi@gmail.com'
            },
            {
                first_name: 'Martin',
                last_name: 'Rojo',
                password: await bcrypt.hash('password', 10),
                email: 'Martin.rojo27@gmail.com'
            },
        ]);
        res.status(200).json({ message: 'User data seeded'});
    } 
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// PUT

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    try {
        const user = await User.findByPk(id);
        if (user) {
            // user.first_name = first_name;
            // user.last_name = last_name;
            user.email = email;
            user.password = password;
            await user.save();
            res.json(user);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// DELETE

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            res.json({ message: 'User deleted' });
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    } 
    catch (err) {
        res.status(500).json({ message: err.message });   
    }
}

dotenv.config();

const router = Router();


// Get All Users

router.get('/', getAllUsers);

router.get('/:id', getOneUser);

// POST

router.post('/', createUser);

// (dev phase)

router.post('/seed', createUsers);

// PUT

router.put('/:id', updateUser);

// DELETE

router.delete('/:id', deleteUser);

export { router as userRouter };