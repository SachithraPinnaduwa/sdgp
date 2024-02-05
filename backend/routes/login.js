const express = require("express");
const {User} = require("../mongoose/schemas/user.js");
const router = express.Router();
const login = require("../controllers/logincontroller.js");
const {query,body, validationResult} = require('express-validator')
router.route("/").get(login.GetCart).post(
    body("name").isString().notEmpty().withMessage("username cannot be empty"),(req,res,next)=>{
    // this is middleware used for validation
    const result = validationResult(req)
    console.log(result)
    if (result.isEmpty()) {
       
        next()
    }else{
      
        res.status(400).send(result.array())
    }
    
  
},
login.postUserData);

router.post("/search",
query("name").isString().notEmpty().withMessage("username cannot be empty"),
(req,res,next)=>{
    const result = validationResult(req)
    if (result.isEmpty()) {
        next()
    }else{
        console.log(result.array())
    }
},
login.searchuser
  
);

module.exports = router;