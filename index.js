const express = require('express');
const app = express();
//2
const modelRoutes = require('./api/routes/input');
const bodyParser = require('body-parser');

//Starting up
// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:'It works'
//     });
// });
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//2
app.use('',modelRoutes)

module.exports = app;