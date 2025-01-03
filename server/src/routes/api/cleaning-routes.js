import { Router } from 'express';
import { Cleaning } from '../../models/cleaning.js';

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
        res.status(500).json({message: error.message});
    }
};

const createCleaningChore = async (req, res) => {
    const { name } = req.body;
    try {
        await Cleaning.create({
            name: name,
            description: ''
        });
        res.status(200).json({ message: 'Cleaning chore added' });
    } 
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

// For dev phase
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
        res.status(500).json({message: error.message});
    }
}

const router = Router();

// Get

router.get('/', getAllCleaningChores);

router.post('/', createCleaningChore);

// Post (for dev phase)

router.post('/seed', createCleaningChores);

export { router as cleaningChoresRouter };