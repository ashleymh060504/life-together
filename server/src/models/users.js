import { DataTypes, Model } from "sequelize";

export class User extends Model {
    id;
    first_name;
    last_name;
    email;
    password
};

export function UserFactory(sequelize) {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            first_name: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            sequelize,
            tableName: 'users'
        }
    );

    // User.addHook('beforeCreate', async (user) => {
    //     if (user.password) {
    //         const bcrypt = require('bcrypt');
    //         const salt = await bcrypt.genSalt(10);
    //         user.password = await bcrypt.hash(user.password, salt);
    //     }
    // });

    return User;
};