
const express = require('express')
const app = express();
require("dotenv").config();
app.use(express.json());
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected to database"))
.catch((err)=>console.log(err))
const login = require("./routes/login");

app.use('/login',login);


app.get('/',(req,res)=>{
    res.send({message:"main page of server"})
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});