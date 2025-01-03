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
                type: DataTypes.STRING(255),
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            username: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            sequelize,
            tableName: 'users'
        }
    );

    return User;
}