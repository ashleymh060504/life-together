import { DataTypes, Model } from "sequelize";

export class Chores extends Model {
    id;
    name;
    assigned_to;
    group_id;
    due_date;
    completed;
};

export function ChoreFactory(sequelize) {
    Chores.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            assigned_to: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'SET NULL'
            },
            group_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'groups',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            due_date: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    isDate: true
                }
            },
            completed: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        },
        {
            sequelize,
            tableName: 'chores',
            timestamps: true
        }
    );

    return Chores;
};