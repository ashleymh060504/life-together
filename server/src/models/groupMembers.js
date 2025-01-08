import { DataTypes, Model } from "sequelize";

export class GroupMembers extends Model {
    group_id;
    user_id;
    joined_at;
    role;
};

export function GroupMemberFactory(sequelize) {
    GroupMembers.init(
        {
            group_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'groups',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            joined_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            role: {
                type: DataTypes.STRING(100),
                // allowNull: false,
                defaultValue: 'member',
                validate: {
                    isIn: [['member', 'admin']]
                }
            }
        },
        {
            sequelize,
            tableName: 'groupMembers',
            timestamps: true,
            indexes: [
                {
                    unique: true,
                    fields: ['group_id', 'user_id']
                }
            ]
        }
    );

    return GroupMembers;
};