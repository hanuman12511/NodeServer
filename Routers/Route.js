const express = require('express');
const router  = express.Router();
const UserControll = require('../controllers/userControllers/UserControll')
router.post("/loginuser", UserControll.userLogin )
router.post("/registeruser", UserControll.userRegister )


module.exports=router