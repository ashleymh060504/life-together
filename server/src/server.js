// let forceDatabaseRefresh;

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './config/connection.js';
import routes from './routes/index.js';
import authRoutes from './routes/authroutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
app.use('/api/auth', authRoutes)

// 'force: true' to reset database after each sync (using only for dev phase)
// Will have to POST seed data before GET user data
sequelize.sync({ force: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(`Failed to sync database or start server: ${err.message}`);
    });