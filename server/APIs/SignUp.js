const express=require('express');
const route=express.Router();
const User=require('./../Models/User');

route.post('/api/signup',(req,res)=>{
    let {name,password} =req.body;
    name=name.toLowerCase();
    var userObj=new User();
    userObj.name=name;
    userObj.password=password;
    userObj.save((err)=>{
        if(err){
            res.send({
                success:false,
                message:"server error"
            });
        }
        else{
            res.send({
                success:true,
                message:"new user added"
            });
        }
    })
})

route.post('/api/signin',(req,res)=>{
    let {name,password} =req.body;
    name=name.toLowerCase();
    var userObj=new User();
    User.find({name:name},(err,users)=>{
        if(err){
            res.send({
                success:false,
                message:"server error"
            });
        }
        //console.log(users.length);
        if(users.length==0){
            res.send({
                success:false,
                message:"No users found"
            });
        }
        else
        {
            if(users[0].password!=password){
                res.send({
                    success:false,
                    message:"password does not match"
                });
            }
            else{
                res.send({
                    success:true,
                    message:"log in successful"
                });
            }
            
        }
    })
})

route.get('/api/users', (req, res) => {
        User.find((err,users)=>{
            if(err){
                res.send({
                    success:false,
                    message:"server error"
                });
            }
            else{
                res.send({
                    success:true,
                    users:users
                });
            }
        })
  });
module.exports=route;