const express = require('express');
const phoneCtrl = require('../controllers/phone.controller');
const router = express.Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });
//VONAGE API ROUTE START
router.post('/createcall/', phoneCtrl.createcall);
router.post('/getcallslog/', phoneCtrl.getcallslog);
router.post('/getreportlog/', phoneCtrl.getreportlog);
router.post('/getreportrecord', phoneCtrl.getreportrecord)
    //VONAGE API ROUTE ENDS

//ADMIN API ROUTE START
router.post('/createentry/', phoneCtrl.createentry);
router.post('/entrylist/', phoneCtrl.entrylist);


//ADMIN API ROUTE ENDS
module.exports = router;
