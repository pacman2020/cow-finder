import CowController from './controllers/Cow';
import AccountController from './controllers/Accounts';
import express from 'express';

const router = express.Router();

const accountController = new AccountController();
const cowcontroller = new CowController();

router.post('/account', accountController.create );

router.get('/cow', cowcontroller.index );
router.get('/cow/:id', cowcontroller.show );
router.post('/cow', cowcontroller.create );
router.put('/cow/:id', cowcontroller.update );
router.delete('/cow/:id', cowcontroller.delete );

export default router;