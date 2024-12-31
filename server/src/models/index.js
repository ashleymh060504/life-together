import sequelize from '../config/connection.js';
import { UserFactory } from './users.js';
import { CleaningFactory } from './cleaning.js';

const User = UserFactory(sequelize);
const Cleaning = CleaningFactory(sequelize);

export { sequelize, User, Cleaning };