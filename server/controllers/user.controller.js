const Vonage = require('@vonage/server-sdk');
const axios = require('axios').default;
const User = require('../models/user.model');
const Recharge = require('../models/recharge.model');



//CREATE USER IN VONAGE
exports.createuser = function(req, response) {
        const vonage = new Vonage({
            apiKey: req.body.apiKey,
            apiSecret: req.body.apiSecret,
            applicationId: req.body.applicationId,
            privateKey: 'private.key'
        })
        vonage.users.create({
            "name": req.body.name,
            "display_name": req.body.display_name
        }, (error, result) => {
            if (error) {
                console.error(error);
            } else {
                console.log(result);
                response.json(result)
            }
        });
    }
    //GET USER LIST FROM VONAGE
exports.getuserlistVonage = function(req, response) {

    const vonage = new Vonage({
        apiKey: req.body.apiKey,
        apiSecret: req.body.apiSecret,
        applicationId: req.body.applicationId,
        privateKey: 'private.key'
    })



    vonage.users.get({}, (error, result) => {
        if (error) {
            console.error(error);
        } else {
            //response.json(result)
            response.json(result._embedded.data.users)
        }
    });
}

//REGISTER USER IN ADMIN PANEL
exports.registerUser = async(req, res) => {
        try {
            let user = new User(req.body.data)
            user.password = await user.hashPassword(req.body.data.password);
            let createdUser = await user.save();

            if (createdUser) {
                res.status(200).json({
                    message: 'Registered successfully!',
                    success: true,
                    data: createdUser
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: 'Error in registration!',


                })
            }

        } catch (err) {
            console.log(err.message)
            let message;
            if (err.errors.username || err.errors.email) {
                if (err.errors.username && !err.errors.email) {
                    message = 'USER NAME  ALREADY EXIST!'
                } else if (!err.errors.username && err.errors.email) {
                    message = 'EMAIL  ALREADY EXIST!'
                } else if (err.errors.username && err.errors.email) {
                    message = 'USER NAME AND EMAIL ALREADY EXIST!'
                }

            } else {
                message = 'SOMETHING WENT WRONG!'
            }


            res.status(200).json({
                success: false,
                message: message,
                // error: err
            })
        }
    }
    //LOGIN USER IN ADMIN PANEL
exports.loginUser = async(req, res) => {
    const login = req.body.data
    try {
        let user = await User.findOne({
            username: login.username
        });
        //check if user exit
        if (!user) {
            res.status(200).json({
                success: false,
                message: 'Wrong Login Details',

            })
        }
        let match = await user.compareUserPassword(login.password, user.password);
        if (match) {
            let token = await user.generateJwtToken({
                user
            }, "secret", {
                expiresIn: 604800
            })
            if (token) {
                res.status(200).json({
                    success: true,
                    message: 'Logged in successfully!',
                    data: {
                        firstname: user.firstname,
                        lastname: user.lastname,
                        username: user.username,
                        status: user.status,
                        email: user.email,
                        balance: user.balance,
                        phone: user.Mobile,
                        _id: user._id,
                        token: token,
                    }

                })
            }
        } else {
            res.status(200).json({
                success: false,
                message: 'Wrong Login Details',


            })
        }
    } catch (err) {
        console.log(err)
        res.status(200).json({
            success: false,
            message: 'Wrong Login Details',
        })
    }
}

exports.getUser = async(req, res) => {
    const email = req.body.email
    try {
        let user = await User.findOne({
            email: email
        });
        console.info(email, user)
            //check if user exit
        if (!user) {
            res.status(200).json({
                success: false,
                message: 'Wrong Login Details',

            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Entry fetched successfully!',
                data: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                    status: user.status,
                    email: user.email,
                    balance: user.balance,
                    _id: user._id,

                }

            })
        }

    } catch (err) {
        console.log(err)
        res.status(200).json({
            success: false,
            message: 'Wrong  Details',
        })
    }

}

exports.getuserlist = async(req, res) => {

    // const createdBy = req.body.createdBy
    try {
        let userlist = await User.find();
        //check if user exit
        if (!userlist) {
            res.status(200).json({
                success: false,
                message: 'NO RECORD FOUND',

            })
        } else {
            res.status(200).json({
                success: true,
                message: 'RECORD FOUND!',
                data: userlist

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

exports.updateStatus = function(req, response) {

    //   try {
    var query = { _id: req.body._id };
    let status;
    if (req.body.status == '' || req.body.status == false) {
        status = true;
    } else {
        status = false
    }
    var newvalues = { $set: { status: status } };
    User.updateOne(query, newvalues, function(err, res) {
        if (err) {
            response.json(err)
            response.json({
                success: false,
                message: 'STATUS NOT UPDATED',
            })
        } else {
            response.json({
                success: true,
                message: 'STATUS UPDATED',
            })
        }

    });

}
exports.addBalance = async(req, response) => {

    let user = await User.findOne({
        email: req.body.email
    });
    let query = { email: req.body.email };
    if (user) {
        var newvalues = { $set: { balance: Number(user.balance) + Number(req.body.amountRecharged) } };
        User.updateOne(query, newvalues, function(err, res) {
            if (err) {
                response.json(err)
                response.json({
                    success: false,
                    message: 'ERROR IN BALANCE  UPDATE',
                })
            } else {
                response.json({
                    success: true,
                    message: 'BALANCE UPDATED',
                })
            }

        });

    }


}
exports.updateBalance = async(req, response) => {



    const promises = [];
    let user = await User.findOne({
        email: req.body.email
    });
    let query = { email: req.body.email };
    if (user) {
        var newvalues = { $set: { balance: Number(user.balance) - Number(req.body.subsctractAmount) } };
        User.updateOne(query, newvalues, function(err, res) {
            if (err) {
                response.json(err)
                response.json({
                    success: false,
                    message: 'STATUS NOT UPDATED',
                })
            } else {
                response.json({
                    success: true,
                    message: 'STATUS UPDATED',
                })
            }

        });

    }


    // return false

    //   try {
    // var query;

    // for (var i = 0; i < req.body.length; i++) {
    //     let item = req.body[i];
    //     query = { email: item.email };
    //     console.info(query)


    //     var newvalues = { $set: { balance: -item.subsctractAmount } };
    //     await User.updateOne(query, newvalues, function(err, res) {
    //         if (err) {
    //             response.json(err)
    //             response.json({
    //                 success: false,
    //                 message: 'STATUS NOT UPDATED',
    //             })
    //         } else {
    //             response.json({
    //                 success: true,
    //                 message: 'STATUS UPDATED',
    //             })
    //         }

    //     });
    // }


}

exports.deleteUser = function(req, res) {
    User.findById(req.body._id)
        .then(function(user) {
            user.remove()
                .then(function(deletedUser) {
                    return res.status(200).json({
                        status: 200,
                        success: true,
                        message: 'USER DELETED'
                    });
                })
                .catch(function(err) {
                    return res.status(400).json({
                        status: 400,
                        success: false,
                        message: err.message
                    });
                });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}

exports.makeRecharge = async(req, res) => {
    console.info(req.body);
    try {
        let recharge = new Recharge(req.body)
        let rechargeData;
        if (req.body.multi) {
            rechargeData = await Recharge.insertMany(req.body.data);
        } else {
            rechargeData = await recharge.save();
        }



        if (rechargeData) {
            res.status(200).json({
                message: 'Recharged successfully!',
                success: true,
                data: (!req.body.multi) ? rechargeData : ''
            })
        } else {
            res.status(400).json({
                success: false,
                message: 'Error in recharge!',


            })
        }

    } catch (err) {
        console.log(err.message)
        let message = 'SOMETHING WENT WRONG!';



        res.status(200).json({
            success: false,
            message: message,
            // error: err
        })
    }
}

exports.getRechargeLog = async(req, res) => {
    const needToConsiderCheck = req.body.needToConsiderCheck
    try {
        let rechargeData;
        if (needToConsiderCheck) {
            rechargeData = await Recharge.find({
                email: req.body.email
            });
        } else {
            rechargeData = await Recharge.find();
        }

        //check if user exit
        if (!rechargeData) {
            res.status(200).json({
                success: false,
                message: 'NO RECORD FOUND',

            })
        } else {
            res.status(200).json({
                success: true,
                message: 'RECORD FOUND!',
                data: rechargeData

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