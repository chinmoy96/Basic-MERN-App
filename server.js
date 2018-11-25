const express = require('express');
const bodyParser = require('body-parser');
const SignUp=require('./server/APIs/SignUp')
var mongoose = require('mongoose');
const DB_Path=require('./config/config').con_string;
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(DB_Path).then(()=>{
  console.log("Database connected"); 
});

app.use('/',SignUp);



app.listen(port, () => console.log(`Listening on port ${port}`));