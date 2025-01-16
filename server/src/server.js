import express from 'express';
import cors from 'cors';
import sequelize from './config/connection.js';
import routes from './routes/index.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(`Failed to sync database or start server: ${err.message}`);
    });