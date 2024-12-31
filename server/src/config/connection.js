import dotenv from 'dotenv';
dotenv.config();

console.log(`Password is: ${process.env.DB_PASSWORD}`);

import { Sequelize } from 'sequelize';

const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)
    : new Sequelize(
        process.env.DB_DATABASE || '',
        process.env.DB_USER || '',
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
            dialectOptions: {
                decimalNumbers: true
            },
            define: {
                freezeTableName: true
            }
        }
    );

    export default sequelize;