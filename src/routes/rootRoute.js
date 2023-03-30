const express = require('express');
const rootRouter = express.Router();
const userRouter = require('./userRoute');
const restaurantRouter = require('./restaurantRouter');
const orderRouter = require('./orderRouter');

rootRouter.use('/user', userRouter);
rootRouter.use('/res', restaurantRouter);
rootRouter.use('/order', orderRouter);


module.exports = rootRouter;