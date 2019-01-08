// import path from 'path';
const express = require('express');
const {router} = require('./routes.js');
const app = express();
const port = 4000;
const compression = require('compression')
const bp = require('body-parser');

app.use(compression())
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(express.static('build_two'));
app.use(router);

app.listen(port, ()=>{
    console.log('listening on port ' + port);
});