import { Router } from 'express';
import { Cleaning } from '../../models/cleaning.js';

// GET

const getAllCleaningChores = async (_req, res) => {
    try {
        const cleaningChores = await Cleaning.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        console.log(cleaningChores);
        res.json(cleaningChores);
    } 
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getCleaningChore = async (req, res) => {
    const { id } = req.params;
    try {
        const cleaningChore = await Cleaning.findByPk(id, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        if (cleaningChore) {
            res.json(cleaningChore);
        }
        else {
            res.status(404).json({ message: 'Cleaning chore not found' });
        }
    } 
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

// POST

const createCleaningChore = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newCleaningChore = await Cleaning.create({
            name: name,
            description: description
        });
        res.status(201).json({ message: 'Cleaning chore added' }, newCleaningChore);
    } 
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

// (for dev phase)
const createCleaningChores = async (_req, res) => {
    try {
        Cleaning.bulkCreate([
            {
                name: 'Dishes',
                description: 'Load the dishwasher and handwash the rest'
            },
            {
                name: 'Laundry',
                description: 'Wash, dry, and fold all the laundry'
            }
        ]);
        res.status(200).json({ message: 'Cleaning chores data seeded' });
    } 
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

// UPDATE

const updateCleaningChore = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name || description === undefined) {
        return res.status(400).json({ message: 'Name and description are required'})
    }
    
    try {
        const cleaningChore = await Cleaning.findByPk(id, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        console.log(cleaningChore);
        console.log(req.body);
        if (cleaningChore) {
            cleaningChore.name = name;
            cleaningChore.description = description;
            await cleaningChore.save();
            res.json(cleaningChore);
        }
        else {
            res.status(404).json({ message: 'Book not found' });
        }
    } 
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

// DELETE

const deleteCleaningChore = async (req, res) => {
    const { id } = req.params;
    try {
        const cleaningChore = await Cleaning.findByPk(id);
        if (cleaningChore) {
            await cleaningChore.destroy();
            res.json({ message: 'Book deleted' });
        }
        else {
            res.status(404).json({ message: 'Book not found' });
        }
    } 
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

const router = Router();

// GET

router.get('/', getAllCleaningChores);

router.get('/:id', getCleaningChore);

// POST

router.post('/', createCleaningChore);

// (for dev phase)

router.post('/seed', createCleaningChores);

// PUT 

router.put('/:id', updateCleaningChore);

// DELETE

router.delete('/:id', deleteCleaningChore);

export { router as cleaningChoresRouter };