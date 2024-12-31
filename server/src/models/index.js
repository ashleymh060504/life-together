import sequelize from '../config/connection.js';
import { UserFactory } from './users.js';

const User = UserFactory(sequelize);

export { sequelize, User };