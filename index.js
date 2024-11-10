// require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser/index');
const app = express();
const {getEncuesta,postEncuesta} = require('./Metodos');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.route('/api/informacion').get(getEncuesta).post(postEncuesta);


app.listen(3000,()=>{
    console.log('Listening to http://localhost:3000')
})


// var pool = mysql.createPool(credencialesMySql);



