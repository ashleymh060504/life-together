import { DataTypes, Model } from "sequelize";

export class User extends Model {
}

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
        }
    );

    return User;
};