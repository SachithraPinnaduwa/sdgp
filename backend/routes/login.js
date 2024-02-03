const express = require("express");
const router = express.Router();
const login = require("../controllers/logincontroller.js");
const {query,body, validationResult} = require('express-validator')
router.route("/").get(login.GetCart).post(body("name").isString().notEmpty().withMessage("username cannot be empty"),(req,res,next)=>{
    //this is middleware used for validation
    const result = validationResult(req)
    console.log(result)
    if (result.isEmpty()) {
       
        next()
    }
    res.send("validation incorrect")
},login.postUserData);

module.exports = router;