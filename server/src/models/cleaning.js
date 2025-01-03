import { DataTypes, Model } from "sequelize";

export class Cleaning extends Model {
    id;
    name;
    description;
    user_id;
}

export function CleaningFactory(sequelize) {
    Cleaning.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'SET NULL'
            }
        },
        {
            sequelize,
            tableName: 'cleaning'
        }
    );

    return Cleaning;
};