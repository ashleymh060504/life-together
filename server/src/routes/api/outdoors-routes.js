import { Router } from 'express';
import { Outdoors } from '../../models/outdoors.js';

// GET

const getAllChores = async (_req, res) => {
    try {
        const chores = await Outdoors.findAll();
        res.json(chores);
    } 
    catch (err) {
        console.error('Error fetching chores:', err);  
        res.status(500).json({ message: err.message });
    }
};

const getChore = async (req, res) => {
    const { id } = req.params;
    try {
        const chore = await Outdoors.findByPk(id);
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
};

// POST

const createChore = async (req, res) => {
    const { name, description, deadline, isComplete } = req.body;
    try {
        const newChore = await Outdoors.create({
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

const createChores = async (_req, res) => {
    try {
        await Outdoors.bulkCreate([
            {
                name: 'Mow the Lawn',
                description: 'Mow the front and back lawn',
                deadline: '2025-01-11T00:00:00.000Z',
                isComplete: false
            },
            {
                name: 'Weed the Garden',
                description: 'Pull all the weeds in the garden',
                deadline: '2025-01-11T00:00:00.000Z',
                isComplete: false
            },
            {
                name: 'Trim the Bushes',
                description: 'Trim all the bushes in the front and back yard',
                deadline: '2025-01-11T00:00:00.000Z',
                isComplete: false
            },
            {
                name: 'Water the Plants',
                description: 'Water all the plants in the garden',
                deadline: '2025-01-11T00:00:00.000Z',
                isComplete: false
            },
            {
                name: 'Rake the Leaves',
                description: 'Rake all the leaves in the front and back yard',
                deadline: '2025-01-11T00:00:00.000Z',
                isComplete: false
            },
        ]);
        res.status(201).json({ message: 'Outdoor chores data seeded' });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// PUT

const updateChore = async (req, res) => {
    const { id } = req.params;
    const { name, description, deadline, isComplete } = req.body;

    if (!name || description === undefined) {
        return res.status(400).json({ message: 'Name and description are required'});
    }

    try {
        const chore = await Outdoors.findByPk(id);
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
        const chore = await Outdoors.findByPk(id);
        if (chore) {
            await chore.destroy();
            res.json({ message: 'Chore successfully deleted' });
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

export { router as outdoorChoresRouter};