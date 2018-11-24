var express=require('express');
var route=express.Router();

route.get('/api/hello', (req, res) => {
        res.send("hello");
  });
module.exports=route;