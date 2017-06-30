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


router.post('/:id', (req,res)=>{
	Cart.create({
            productId: req.params.id,
            userId: 1,
            quantity: 1
        }).then((cartRow) => {

			res.send("Success");

    }).catch((err) => {
        res.send(err);
    })

})
module.exports = router;