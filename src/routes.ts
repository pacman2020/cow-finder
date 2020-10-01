import CowController from './controllers/Cow';
import express from 'express';

const router = express.Router();

const cowcontroller = new CowController();

router.get('/cow', cowcontroller.index );
router.get('/cow/:id', cowcontroller.show );
router.post('/cow', cowcontroller.create );

export default router;