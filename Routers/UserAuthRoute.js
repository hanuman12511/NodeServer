const express = require('express');
const { loginAppApi, getloginAppApi } = require('../controllers/userControllers/UserControll');
const UserAuthRoute  = express.Router();


UserAuthRoute.post("/getloginAppApi",getloginAppApi)
UserAuthRoute.post("/loginAppApi",loginAppApi)
    

module.exports=UserAuthRoute