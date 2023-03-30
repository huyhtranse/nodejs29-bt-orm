const DataTypes = require("sequelize").DataTypes;
const _food = require("./food");
const _food_type = require("./food_type");
const _like_res = require("./like_res");
const _order_food = require("./order_food");
const _rate_res = require("./rate_res");
const _restaurant = require("./restaurant");
const _sub_food = require("./sub_food");
const _users = require("./users");

function initModels(sequelize) {
  const food = _food(sequelize, DataTypes);
  const food_type = _food_type(sequelize, DataTypes);
  const like_res = _like_res(sequelize, DataTypes);
  const order_food = _order_food(sequelize, DataTypes);
  const rate_res = _rate_res(sequelize, DataTypes);
  const restaurant = _restaurant(sequelize, DataTypes);
  const sub_food = _sub_food(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  food.belongsToMany(users, { as: 'user_id_users_order_foods', through: order_food, foreignKey: "food_id", otherKey: "user_id" });
  restaurant.belongsToMany(users, { as: 'user_id_users', through: like_res, foreignKey: "res_id", otherKey: "user_id" });
  restaurant.belongsToMany(users, { as: 'user_id_users_rate_res', through: rate_res, foreignKey: "res_id", otherKey: "user_id" });
  users.belongsToMany(food, { as: 'food_id_foods', through: order_food, foreignKey: "user_id", otherKey: "food_id" });
  users.belongsToMany(restaurant, { as: 'res_id_restaurants', through: like_res, foreignKey: "user_id", otherKey: "res_id" });
  users.belongsToMany(restaurant, { as: 'res_id_restaurant_rate_res', through: rate_res, foreignKey: "user_id", otherKey: "res_id" });
  order_food.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(order_food, { as: "order_foods", foreignKey: "food_id"});
  sub_food.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(sub_food, { as: "sub_foods", foreignKey: "food_id"});
  food.belongsTo(food_type, { as: "type", foreignKey: "type_id"});
  food_type.hasMany(food, { as: "foods", foreignKey: "type_id"});
  like_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(like_res, { as: "like_res", foreignKey: "res_id"});
  rate_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(rate_res, { as: "rate_res", foreignKey: "res_id"});
  like_res.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(like_res, { as: "like_res", foreignKey: "user_id"});
  order_food.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order_food, { as: "order_foods", foreignKey: "user_id"});
  rate_res.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(rate_res, { as: "rate_res", foreignKey: "user_id"});

  return {
    food,
    food_type,
    like_res,
    order_food,
    rate_res,
    restaurant,
    sub_food,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
