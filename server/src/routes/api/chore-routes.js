import { Router } from 'express';
import { Chores } from '../../models/chores.js';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

// GET

const getAllChores = async (_req, res) => {
    try {
        // const token = req.headers.authorization?.split(' ')[1];
        // if (!token) {
        //     return res.status(401).json({ message: 'Unauthorized, no token provided.' });
        // }

        // const secretKey = process.env.JWT_SECRET_KEY || '';
        // const decoded = jwt.verify(token, secretKey);
        // const userId = decoded.id;

        // const chores = await Chores.findAll({
        //     where: { user_id: userId, isComplete: false },
        //     attributes: ['id', 'name', 'description', 'deadline', 'isComplete'],
        //     include: {
        //         model: User,
        //         attributes: ['id', 'email']
        //     }
        // });
        const chores = await Chores.findAll();
        res.json(chores);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getChore = async (req, res) => {
    const { id } = req.params;
    try {
        const chore = await Chores.findByPk(id);
        if (chore) {
            res.json(chore);
        }
        else {
            res.status(404).json({ message: 'Chore not found' });
        }
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getCompletedChores = async (_req, res) => {
    try {
        const completedChores = await Chores.findAll({ 
            where: {
                isComplete: true
            }
        });
        res.json(completedChores);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// POST

const createChore = async (req, res) => {
    const { name, description, deadline, isComplete } = req.body;
    try {
        // const token = req.headers.authorization?.split(' ')[1]; 
        // if (!token) {
        //     return res.status(401).json({ message: 'No token provided, authorization required' });
        // }

        // const secretKey = process.env.JWT_SECRET_KEY || ''; 
        // const decoded = jwt.verify(token, secretKey);
        // const userId = decoded.id; 

        const newChore = await Chores.create({
            name: name,
            description: description,
            deadline: deadline,
            isComplete: isComplete
        });
        res.status(201).json({ message: 'Chore successfully added', data: newChore });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE

const updateChore = async (req, res) => {
    const { id } = req.params;
    const { name, description, deadline, isComplete } = req.body;

    if (!name || description === undefined || deadline === undefined) {
        return res.status(400).json({ message: 'Name is required'})
    }
    
    try {
        const chore = await Chores.findByPk(id);
        if (chore) {
            chore.set('name', name);
            chore.set('description', description);
            chore.set('deadline', deadline);
            chore.set('isComplete', isComplete);
            await chore.save();
            res.json({ message: 'Chore updated successfully', data: chore});
        }
        else {
            res.status(404).json({ message: 'Chore not found' });
        }
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE

const deleteChore = async (req, res) => {
    const { id } = req.params;
    try {
        const chore = await Chores.findByPk(id);
        if (chore) {
            await chore.destroy();
            res.json({ message: 'Chore deleted' });
        }
        else {
            res.status(404).json({ message: 'Chore not found' });
        }
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const router = Router();

// GET

router.get('/', getAllChores);

router.get('/completed', getCompletedChores);

router.get('/:id', getChore);

// POST

router.post('/', createChore);

// PUT 

router.put('/:id', updateChore);

// DELETE

router.delete('/:id', deleteChore);

export { router as choresRouter };