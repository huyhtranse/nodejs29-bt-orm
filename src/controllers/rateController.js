const initModels = require("../models/init-models");
const sequelize = require('../models/index');
const { successCode, failCode } = require("../config/response");

const model = initModels(sequelize);

const getRateListUserPoint = async (req, res) => {
    try {
        const { user_id } = req.params;
        const data = await model.users.findAll({
            where: { user_id },
            include: ['res_id_restaurant_rate_res']
        });
        successCode(res, data, 'Get List Restaurants Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

const getRateListResPoint = async (req, res) => {
    try {
        const { res_id } = req.params;
        const data = await model.restaurant.findAll({
            where: { res_id },
            include: ['user_id_users_rate_res']
        });
        successCode(res, data, 'Get List Users Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

const getRateUserPeerRes = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;
        const data = await model.rate_res.findAll({
            where: { user_id, res_id }, include: ['re', 'user']
        });

        successCode(res, data, 'Get Rate Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

const rateAction = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;
        const { amount, comment } = req.body;

        const date_rate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const modelCreate = { user_id, res_id, date_rate, amount, comment };

        const data = await model.rate_res.create(modelCreate);

        successCode(res, data, 'Rate Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

const rateChange = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;
        const { amount, comment } = req.body;

        const date_rate = new Date().toJSON().slice(0, 19).replace('T', ' ');
        const modelCreate = { user_id, res_id, date_rate, amount, comment };

        const data = await model.rate_res.update(modelCreate, { where: { user_id, res_id } });

        successCode(res, data, 'Change Rate Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

const rateDelete = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;

        const data = await model.rate_res.destroy({ where: { user_id, res_id } });

        successCode(res, data, 'Delete Rate Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

module.exports = { getRateListUserPoint, getRateListResPoint, getRateUserPeerRes, rateAction, rateChange, rateDelete }
