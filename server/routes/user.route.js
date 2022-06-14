const express = require('express');
const userCtrl = require('../controllers/user.controller');
const router = express.Router();
//VONAGE API ROUTE START
router.post('/createuser/', userCtrl.createuser);
router.post('/getuserlistvonage/', userCtrl.getuserlistVonage);
//VONAGE API ROUTE ENDS

//ADMIN API ROUTE START
router.post('/register/', userCtrl.registerUser);
router.post('/login/', userCtrl.loginUser);
router.post('/getuser/', userCtrl.getUser);
router.post('/getuserlist/', userCtrl.getuserlist);
router.post('/updatestatus/', userCtrl.updateStatus);
router.post('/deleteuser/', userCtrl.deleteUser);
router.post('/updatebalancelog/', userCtrl.makeRecharge);
router.post('/addbalance/', userCtrl.addBalance);
router.post('/updatebalance/', userCtrl.updateBalance);
router.post('/getrechargelog/', userCtrl.getRechargeLog);







//ADMIN API ROUTE ENDS
module.exports = router;