import { Router } from 'express';
import { Cleaning } from '../../models/cleaning.js';

// GET

const getAllChores = async (_req, res) => {
    try {
        const cleaningChores = await Cleaning.findAll();
        res.json(cleaningChores);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getChore = async (req, res) => {
    const { id } = req.params;
    try {
        const cleaningChore = await Cleaning.findByPk(id);
        if (cleaningChore) {
            res.json(cleaningChore);
        }
        else {
            res.status(404).json({ message: 'Chore not found' });
        }
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// POST

const createChore = async (req, res) => {
    const { name, description, deadline } = req.body;
    try {
        const newChore = await Cleaning.create({
            name: name,
            description: description,
            deadline: deadline
        });
        res.status(201).json({ message: 'Chore successfully added', data: newChore });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createChores = async (_req, res) => {
    try {
        Cleaning.bulkCreate([
            {
                name: 'Dishes',
                description: 'Load the dishwasher and handwash the rest',
                deadline: ''
            },
            {
                name: 'Laundry',
                description: 'Wash, dry, and fold all the laundry',
                deadline: ''
            },
            {
                name: 'Mopping',
                description: 'Mop all of the hard floors',
                deadline: ''
            },
            {
                name: 'Vacuuming',
                description: 'Vacuum the house',
                deadline: ''
            },
            {
                name: 'Dusting',
                description: 'Dust all surfaces',
                deadline: ''
            }
        ]);
        res.status(201).json({ message: 'Cleaning chores data seeded' });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE

const updateChore = async (req, res) => {
    const { id } = req.params;
    const { name, description, deadline } = req.body;

    if (!name || description === undefined || deadline === undefined) {
        return res.status(400).json({ message: 'Name is required'})
    }
    
    try {
        const chore = await Cleaning.findByPk(id);
        if (chore) {
            chore.set('name', name);
            chore.set('description', description);
            chore.set('deadline', deadline);
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
        const chore = await Cleaning.findByPk(id);
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

router.get('/:id', getChore);

// POST

router.post('/', createChore);

router.post('/seed', createChores);

// PUT 

router.put('/:id', updateChore);

// DELETE

router.delete('/:id', deleteChore);

export { router as cleaningChoresRouter };