const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require("path");
//post request test
const request = require('request');

router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //             message:'It works to handle get request'
    //         });
    res.sendFile(path.join(__dirname,'../../index.html'));
});

router.post('/data',(req,res,next)=>{
    // res.status(200).json({
    //             message:'It works to handle post request'
    //         });

    console.log(req.body.variance);
    console.log(req.body.skewness);
    console.log(req.body.curtosis);
    console.log(req.body.entropy);
    var myJSONObject = {"variance":req.body.variance,"skewness":req.body.skewness,"curtosis":req.body.curtosis,"entropy":req.body.entropy};
    var prediction;
    request({
    url: " http://127.0.0.1:8000/predict",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
    }, function (error, response, body){
    console.log(body);
    prediction = body;
    res.status(200).json({
        message:body['prediction']
    });
    });

});

module.exports = router;    