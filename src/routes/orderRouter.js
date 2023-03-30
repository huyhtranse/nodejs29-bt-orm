const express = require('express');
const resRouter = express.Router();

const { takeAnOrder } = require('../controllers/orderController');

resRouter.post('/order-take/:user_id/food/:food_id', takeAnOrder);

module.exports = resRouter;
