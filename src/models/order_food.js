const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return order_food.init(sequelize, DataTypes);
}

class order_food extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'food',
        key: 'food_id'
      }
    },
    amount: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    code_food: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    arr_sub_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_food',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "food_id" },
        ]
      },
      {
        name: "food_id",
        using: "BTREE",
        fields: [
          { name: "food_id" },
        ]
      },
    ]
  });
  }
}
