import { DataTypes, Model } from "sequelize";

export class Outdoors extends Model {

}

export function OutdoorsFactory(sequelize) {
    Outdoors.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
            },
            deadline: {
                type: DataTypes.DATE,
                allowNull: true,
                validate: {
                    isDate: true
                }
            },
            isComplete: {
                type: DataTypes.BOOLEAN,
                field: "isComplete",
                defaultValue: false
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
            tableName: 'outdoors'
        }
    );
    
    return Outdoors;
};