const router = require('express').Router();
const Cart = require('../db/models.js').models.Cart;


router.get('/:id/cart', (req, res)=>{
	Cart.findAll(
        {
            where: {
                userId: req.params.id
                
            }
        }).then((cartRowsMatched) => {
        	res.send(cartRowsMatched);
        }).catch((err) => {
        	
        	res.send(err);
        });


})

router.put('/:userid/:productid/increment', (req, res)=>{
	
})

module.exports = router;