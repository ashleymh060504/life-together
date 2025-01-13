import sequelize from '../config/connection.js';
import { UserFactory } from './users.js';
import { ChoreFactory } from './chores.js';
import { CleaningFactory } from './cleaning.js';
import { OutdoorsFactory } from './outdoors.js';

const User = UserFactory(sequelize);
const Chores = ChoreFactory(sequelize);
const Cleaning = CleaningFactory(sequelize);
const Outdoors = OutdoorsFactory(sequelize);

// User.hasMany(Chores, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Chores.belongsTo(User, {
//     foreignKey: 'user_id'
// });

export { sequelize, User, Chores, Cleaning, Outdoors };