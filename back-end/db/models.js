const Sequelize = require('sequelize');

const db = new Sequelize('freecart', 'freecartadmin', 'freecartpass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 5000
    }
});

//defining the schema of the table/Model
const Product = db.define('product', {
    id: {
	   type: Sequelize.INTEGER,
 	   primaryKey: true,
       autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    price: Sequelize.INTEGER,
    imgurl: Sequelize.STRING
});

const User = db.define('user', {
    id: {
	   type: Sequelize.INTEGER,
 		 primaryKey: true,
     autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: Sequelize.STRING
});



const Cart = db.define('cart', {
    id: {
	   type: Sequelize.INTEGER,
 	   primaryKey: true,
       autoIncrement: true
    },
    
    quantity: Sequelize.INTEGER
    
});



Cart.belongsTo(Product);
Product.hasMany(Cart);


Cart.belongsTo(User);
User.hasMany(Cart);

db.sync({force: false})
     .then(() => {
         console.log("Database Synchronised");
     })

module.exports = {
     db,
     models: {
        User,
        Product,
        Cart
     }
 }; 