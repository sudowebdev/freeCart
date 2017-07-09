const express = require('express');
const router = require('./routes'); 
const cors = require('cors');

const app = express();
app.use(cors());
app.use('/', router);
app.listen(3333, ()=>{
	console.log('Listening on port 3333');
})