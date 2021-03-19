import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/users')
    .get(userCtrl.list)
    .post(userCtrl.create);

router.route('/users/:userId')
    .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

router.param('userId', userCtrl.userByID);

export default router;