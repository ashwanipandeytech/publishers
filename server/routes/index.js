const express = require('express');
const userRoutes = require('./user.route');
const phoneRoutes = require('./phone.route');

const router = express.Router();

router.get('/', function(req, res) {
    res.send('API works!');
});

router.use('/user', userRoutes);
router.use('/phone', phoneRoutes);

module.exports = router;
