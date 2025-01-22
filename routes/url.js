const express=require("express");
const{generatenewShortUrl}=require("../controllers/urlController");
const router=express.Router();


router.post("/",generatenewShortUrl);



module.exports=router;