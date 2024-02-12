const express = require('express');
const router  = express.Router();
const UserControll = require('../controllers/userControllers/UserControll')
const LeadControll = require('../controllers/leadControllers/LeadControll')
router.post("/loginuser", UserControll.userLogin )
router.post("/registeruser", UserControll.userRegister )
router.post("/leadadd", LeadControll.leadAdd )


module.exports=router