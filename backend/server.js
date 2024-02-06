const {connectToDatabase} = require('./db/connection'); 
const express = require('express')
const app = express();
const cors = require('cors');
require("dotenv").config();
app.use(express.json());

app.use(cors());
connectToDatabase()
.then(()=>{
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
})
console.log("connected to database")
})
.catch((err)=>console.log(err))
const login = require("./routes/login");

app.use('/login',login);


app.get('/',(req,res)=>{
    res.send({message:"main page of server"})
})
