const Vonage = require('@vonage/server-sdk');
const axios = require('axios').default;
const Entry = require('../models/entry.model');
// Requiring the module
const path = require("path");
const reader = require('xlsx');
// Reading our test file
const filepath = path.resolve(__dirname, "testcalllog.xlsx");
const file = reader.readFile(filepath)
const fileupload = require("express-fileupload");

//For creating a call
exports.createcall = function(req, res) {
        const vonage = new Vonage({
            apiKey: req.body.apiKey,
            apiSecret: req.body.apiSecret,
            applicationId: req.body.applicationId,
            privateKey: 'private.key'
        })

        vonage.calls.create({
            to: [{
                type: 'phone',
                // number: "13473700602"
                number: "917042237973"
            }],
            from: {
                type: 'phone',
                number: "917827643173"
            },
            ncco: [{
                "action": "talk",
                "text": "Hello , this is test call"
            }]
        }, (error, response) => {
            if (error) console.error(error)
            if (response) {

            }
        })
        res.status(200).send(JSON.stringify({ "success": true }));
    }
    //For generating a call list
exports.getcallslog = function(req, response) {
        //  console.info(req)
        const vonage = new Vonage({
            apiKey: req.body.apiKey,
            apiSecret: req.body.apiSecret,
            applicationId: req.body.applicationId,
            privateKey: 'private.key'
        }, {
            apiHost: 'api-sg-1.nexmo.com',
            restHost: 'rest-sg-1.nexmo.com'
        })

        vonage.calls.get({}, (err, res) => {
            if (err) { console.error(err); } else {
                //return res;
                // res._embedded.calls.forEach((call) => {
                //     console.log(call);

                // });
                console.log(res._embedded.calls);
                response.json(res._embedded.calls)
                    // response.status(200).send(JSON.stringify(res._embedded.calls));
            }
        });
    }
    //For generating a record
exports.getreportlog = function(req, response) {

    let requestPayload = {
        "product": "VOICE-CALL",
        "account_id": req.body.account_id,
        "direction": 'outbound'
    }

    let authKey = "Bearer " + req.body.JWT;
    axios.get('https://api-sg-1.nexmo.com/v1/calls', {
            headers: {
                'Authorization': authKey
            }
        })
        .then(function(res) {
            //console.log(res);
            response.json(res.data)
        })
        .catch(function(error) {
            console.log(error.response);
            response.json(error.response)
        });





}

//For generating a record list
exports.getreportrecord = function(req, response) {


    let authKey = "Basic " + btoa(req.body.account_id + ":" + req.body.apiSecret);
    // axios.get('https://api.nexmo.com/v2/reports/records?account_id=' + req.body.account_id + '&product=' + req.body.product + '&api_key=' + req.body.account_id + '&api_secret=' + req.body.apiSecret, {
    //         headers: {
    //             'Authorization': authKey
    //         }
    //     })
    axios.get('https://api.nexmo.com/v2/reports/records', {
            params: {
                // 'api_key': req.body.account_id,
                // 'api_secret': req.body.apiSecret,
                'account_id': req.body.account_id,
                'product': req.body.product

            },
            headers: {
                'Authorization': authKey,

            }
        })
        .then(function(res) {
            console.log(res);
            response.json(res.data)
        })
        .catch(function(error) {
            console.log(error);
            response.json(error)

        });





}


//CREATE ENTRY IN ADMIN PANEL
exports.createentry = async(req, res) => {
        try {
            // console.info(req.body.arraylist)
            // let data = [];
            // const sheets = file.SheetNames;
            // console.info(req);
            // for (let i = 0; i < sheets.length; i++) {
            //     const temp = reader.utils.sheet_to_json(
            //         file.Sheets[file.SheetNames[i]])

            //     temp.forEach((res) => {
            //         data.push(res)
            //     })
            // }
            // // Printing data
            // console.log(data)

            // return false;

            let entry = new Entry()
            let createdEntry = await Entry.insertMany(req.body.arraylist);

            if (createdEntry) {
                res.status(200).json({
                    message: 'Entries created successfully!',
                    success: true,
                    data: createdEntry
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: 'Error in entry creation!',


                })
            }

        } catch (err) {
            // console.log(err.message)
            let message = err.message;



            res.status(200).json({
                success: false,
                message: message,
                // error: err
            })
        }
    }
    //GET ENTRY LIST IN ADMIN PANEL
exports.entrylist = async(req, res) => {
    const needToConsiderCheck = req.body.needToConsiderCheck
    try {
        let entrylist;
        if (needToConsiderCheck) {
            entrylist = await Entry.find({
                email: req.body.email
            });
        } else {
            entrylist = await Entry.find();
        }

        //check if user exit
        if (!entrylist) {
            res.status(200).json({
                success: false,
                message: 'NO RECORD FOUND',

            })
        } else {
            res.status(200).json({
                success: true,
                message: 'RECORD FOUND!',
                data: entrylist

            })
        }

    } catch (err) {
        console.log(err)
        res.status(200).json({
            success: false,
            message: 'NO RECORD FOUND',
        })
    }
}





exports.uploadfile = function(req, response) {
    let requestPayload = {
        "uploadedby": req.body.uploadedby,
        "direction": 'outbound'
    }

    let authKey = "Bearer " + req.body.JWT;
    axios.get('https://api-sg-1.nexmo.com/v1/calls', {
            headers: {
                'Authorization': authKey
            }
        })
        .then(function(res) {
            //console.log(res);
            response.json(res.data)
        })
        .catch(function(error) {
            console.log(error.response);
            response.json(error.response)
        });





}