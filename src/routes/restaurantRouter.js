const express = require('express');
const resRouter = express.Router();

const { getLikeListResPoint } = require('../controllers/likeController');
const { getRateListResPoint } = require('../controllers/rateController');

resRouter.get('/like-res/:res_id', getLikeListResPoint);

resRouter.get('/rate-res/:res_id', getRateListResPoint);

module.exports = resRouter;
