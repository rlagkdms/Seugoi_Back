const { Sequelize, DataTypes } = require("sequelize");

// image
// name
// hashTag
// endDate
// title
// simple-content
// study-work []
// detail-content
// recom-content

class Study extends Sequelize.Model {
    static init(sequelize) {
        return super.init ({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                references:{
                    model : 'users',
                    key : 'id'
                }
            },
            image: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            hashTag: {
                type: DataTypes.JSON,
                allowNull: false
            },
            endData: {
                type: DataTypes.DATE,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            simple_content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            study_content: {
                type: DataTypes.JSON,
                allowNull: false
            },
            detail_content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            recom_content: {
                type: DataTypes.JSON,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: false,
            underscored: false,
            modelName: 'Study',
            tableName: 'studys',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}

module.exports = Study;