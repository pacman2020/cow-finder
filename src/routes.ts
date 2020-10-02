import CowController from './controllers/Cow';
import AccountController from './controllers/Accounts';
import LoginController from './controllers/Login';
import express from 'express';
import { auth } from './middleware/authetication';

const router = express.Router();

const accountController = new AccountController();
const cowcontroller = new CowController();
const loginController = new LoginController();

router.post('/account', accountController.create );
router.post('/login', loginController.create );
router.delete('/account',auth, accountController.delete );

router.get('/cow', cowcontroller.index );
router.get('/cow/:id', cowcontroller.show );
router.post('/cow',auth, cowcontroller.create );
router.put('/cow/:id',auth, cowcontroller.update );
router.delete('/cow/:id',auth, cowcontroller.delete );

export default router;