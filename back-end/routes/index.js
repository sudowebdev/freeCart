const router = require('express').Router();


router.use('/api/products', require('./products.js'));
router.use('/api/user', require('./usercart.js'));

module.exports = router;