import { DataTypes, Model } from "sequelize";
import bcrypt from 'bcrypt';

export class User extends Model {
    id;
    email;
    password;
};

export function UserFactory(sequelize) {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            // first_name: {
            //     type: DataTypes.STRING(50),
            //     allowNull: false
            // },
            // last_name: {
            //     type: DataTypes.STRING(50),
            //     allowNull: false
            // },
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
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Please enter a password'
                    }
                }
            },
        },
        {
            sequelize,
            tableName: 'users',
            timestamps: false,
            hooks: {
                beforeCreate: async (user) => {
                    await user.setPassword(user.password);
                },
                beforeUpdate: async (user) => {
                        await user.setPassword(user.password);
                    }
                }
                // beforeCreate: async (newUserData) => {
                //     await newUserData.setEmailToLowerCase();
                // },
                // beforeUpdate: async (updatedUserData) => {
                //     await updatedUserData.setEmailToLowerCase();
                // },
                // beforeCreate: async (newUserData) => {
                //     await newUserData.setPassword(newUserData.password);
                // },
                // beforeUpdate: async (updatedUserData) => {
                //     if (updatedUserData.password) {
                //         await updatedUserData.setPassword(updatedUserData.password);
                //     }
                // }
        }
    );

    return User;
};