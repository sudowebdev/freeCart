const router = require('express').Router();
const Product = require('../db/models.js').models.Product;
const Cart = require('../db/models.js').models.Cart;

router.get('/', (req,res) => {

	Product.findAll({})
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            
            res.status(500).send("Error retrieving events")
      	})

})


router.post('/addtocart/:id', (req,res)=>{
	 Cart
  	.findOrCreate({where: {productId: req.params.id, userId: 1}, defaults: { quantity: 1 }})
  	.spread(function(productFound, created){
  		
	    //spread divides the array into its 2 parts and passes them as arguments to the callback function   
	  	if(created){
	  	   //when the entry is not found. It gets created.
	    	console.log('Created :',created);

	  	}else{
	      //when the entry exists. the quantity value gets updated
	  		console.log('Found :',productFound);
	  		Cart.find({
		        where: {
		            productId: req.params.id, 
		            userId: 1
		        }
    		}).then((model)=>{
		    	console.log('Inside the model');
		        //Incrementing the value of quantity column by 1
		        
		        return model.increment({"quantity": 1});
	    	});
	  		
  	}
  	res.send('Success');
})

})
module.exports = router;