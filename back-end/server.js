const express = require('express');
const router = require('./routes'); 

const app = express();

app.use('/', router);
app.listen(3333, ()=>{
	console.log('Listening on port 3333');
})