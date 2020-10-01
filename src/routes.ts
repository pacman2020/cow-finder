import CowController from './controllers/Cow';
import AccountController from './controllers/Accounts';
import LoginController from './controllers/Login';
import express from 'express';

const router = express.Router();

const accountController = new AccountController();
const cowcontroller = new CowController();
const loginController = new LoginController();

router.post('/account', accountController.create );
router.post('/login', loginController.create );

router.get('/cow', cowcontroller.index );
router.get('/cow/:id', cowcontroller.show );
router.post('/cow', cowcontroller.create );
router.put('/cow/:id', cowcontroller.update );
router.delete('/cow/:id', cowcontroller.delete );

export default router;