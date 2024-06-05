const express = require('express');
const router  = express.Router();
const UserControll = require('../controllers/userControllers/UserControll')
const LeadControll = require('../controllers/leadControllers/LeadControll')
router.post("/loginuser", UserControll.userLogin )
router.post("/registeruser", UserControll.userRegister )
router.post("/leadadd", LeadControll.leadAdd )
router.post("/leadstatusupdate", LeadControll.leadStatusUpadate )
router.get("/leadshow", LeadControll.leadShow )
router.post("/leaddelete", LeadControll.leadDelete )
router.get("/leadView", LeadControll.leadView )
router.post("/userlogin",UserControll.userSign )


module.exports=router