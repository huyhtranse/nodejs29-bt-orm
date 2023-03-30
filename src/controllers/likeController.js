const initModels = require("../models/init-models");
const sequelize = require('../models/index');
const { successCode, failCode } = require("../config/response");

const model = initModels(sequelize);

const getLikeListUserPoint = async (req, res) => {
    try {
        const { user_id } = req.params;
        const data = await model.users.findAll({
            where: { user_id },
            include: ['res_id_restaurants']
        });
        successCode(res, data, 'Get List Restaurants Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

const getLikeListResPoint = async (req, res) => {
    try {
        const { res_id } = req.params;
        const data = await model.restaurant.findAll({
            where: { res_id },
            include: ['user_id_users']
        });
        successCode(res, data, 'Get List Users Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

const getLikeUserPeerRes = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;
        const data = await model.like_res.findAll({
            where: { user_id, res_id }, include: ['re', 'user']
        });

        successCode(res, data, 'Get Like Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

const reactAction = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;
        const { status } = req.body;

        const date_like = new Date().toJSON().slice(0, 19).replace('T', ' ');
        const modelCreate = { user_id, res_id, date_like, status };

        const data = await model.like_res.create(modelCreate);

        successCode(res, data, 'Reaction Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

const reactChange = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;
        const { status } = req.body;

        const date_like = new Date().toJSON().slice(0, 19).replace('T', ' ');
        const modelCreate = { user_id, res_id, date_like, status };

        const data = await model.like_res.update(modelCreate, { where: { user_id, res_id } });

        successCode(res, data, 'Change Reaction Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

const reactDelete = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;

        const data = await model.like_res.destroy({ where: { user_id, res_id } });

        successCode(res, data, 'Delete Reaction Success');
    } catch (error) {
        failCode(res, 'Internal Server Error');
    }
}

module.exports = { getLikeListUserPoint, getLikeListResPoint, getLikeUserPeerRes, reactAction, reactChange, reactDelete }
