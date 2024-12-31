import { DataTypes, Model } from "sequelize";

export class User extends Model {
    id;
    first_name;
    last_name;
    username;
    password;
    email;
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
                type: DataTypes.STRING
            },
            last_name: {
                type: DataTypes.STRING
            },
            username: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            tableName: 'users'
        }
    );

    return User;
}