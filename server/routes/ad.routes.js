import express from 'express';
import adCtrl from '../controllers/ad.controller.js';

const router = express.Router();

router.route('/ad')
    .get(adCtrl.list)
    .post(adCtrl.create);

export default router;