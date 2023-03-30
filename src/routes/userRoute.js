const express = require('express');
const useRouter = express.Router();

const { getLikeListUserPoint, getLikeUserPeerRes, reactAction, reactChange, reactDelete } = require('../controllers/likeController');
const { getRateListUserPoint, getRateUserPeerRes, rateAction, rateChange, rateDelete } = require('../controllers/rateController');

useRouter.get('/like-user/:user_id', getLikeListUserPoint);
useRouter.get('/like-user/:user_id/res/:res_id', getLikeUserPeerRes);
useRouter.post('/react-action/:user_id/res/:res_id', reactAction);
useRouter.put('/react-change/:user_id/res/:res_id', reactChange);
useRouter.delete('/react-delete/:user_id/res/:res_id', reactDelete);

useRouter.get('/rate-user/:user_id', getRateListUserPoint);
useRouter.get('/rate-user/:user_id/res/:res_id', getRateUserPeerRes);
useRouter.post('/rate-action/:user_id/res/:res_id', rateAction);
useRouter.put('/rate-change/:user_id/res/:res_id', rateChange);
useRouter.delete('/rate-delete/:user_id/res/:res_id', rateDelete);

module.exports = useRouter;
