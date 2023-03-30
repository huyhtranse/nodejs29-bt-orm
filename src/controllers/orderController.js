const initModels = require("../models/init-models");
const sequelize = require('../models/index');
const { successCode, failCode } = require("../config/response");

const model = initModels(sequelize);

const takeAnOrder = async (req, res) => {
    try {
        const { user_id, food_id } = req.params;
        const { amount, arr_sub_id, code_food } = req.body;
        const modelCreate = { user_id, food_id, amount, code_food, arr_sub_id };

        const data = await model.order_food.create(modelCreate);
        successCode(res, data, 'Order Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

module.exports = { takeAnOrder }
