import { DataTypes, Model } from "sequelize";

export class Groups extends Model {
    id;
    name;
}

export function GroupFactory(sequelize) {
    Groups.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(25),
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: true
                }
            }
        },
        {
            sequelize,
            tableName: 'groups',
            timestamps: true
        }
    );

    return Groups;
};