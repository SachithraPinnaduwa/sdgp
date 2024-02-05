const axios = require("axios");
const {User} = require("../mongoose/schemas/user.js");
const users = [
  {name: "John Doe", email: "sachithra@gmail.com", id: 1, scam: "scam"},
{name: "Jane Doe", email: "jane@gmail.com", id: 2, scam: "scam2"},
{name: "John Smith", email: "john@gmail.com", id: 3, scam: "scam3"},
]; 

async function GetCart(req, res) {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function postUserData(req,res) {

  const { body } = req;
  const newUser = new User(body)
  if (req.body.name === undefined) {
    return res.status(400).send({ error: "Name is required" });
    
  }
  try {
    const savedUser = await newUser.save()
return res.status(200).send(savedUser);
  } catch (error) {
    return res.sendStatus(500).send({error:"Internal Server Error"})
  }
  // const parseID = parseInt(req.body.id);
  // const{body} = req;
  // const newUser = {id:users[users.length-1].id+1,...body};
  // users.push(newUser)
 
  // return res.status(200).send(users);
  
}
async function searchuser(req, res) {
  const { name } = req.query;
  try {
    const user = await User.findOne({ name: name });

    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}
module.exports = { GetCart, postUserData, searchuser};
