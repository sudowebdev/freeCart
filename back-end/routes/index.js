const router = require('express').Router();
const productRouter = require('./products.js');
const usercartRouter = require('./usercart.js');

router.use('/api/products', productRouter);
router.use('/api/user', usercartRouter);

module.exports = router;