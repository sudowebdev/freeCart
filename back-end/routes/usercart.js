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
	Cart.find({
		        where: {
		            productId: req.params.productid, 
		            userId: req.params.userid
		        }
    		}).then((model)=>{
		    	console.log('Inside the model');
		        //Incrementing the value of quantity column by 1
		        res.send('Success');
		        return model.increment({"quantity": 1});
	    	});
})

module.exports = router;