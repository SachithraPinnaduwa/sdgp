const axios = require("axios");

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
function postUserData(req,res) {
  const parseID = parseInt(req.body.id);
  const{body} = req;
  const newUser = {id:users[users.length-1].id+1,...body};
  users.push(newUser)
  // if (isNaN(parseID)) {
  //   return res.status(400).send({ error: "Invalid ID" });
  // }
  // res.status(200).send({  id: req.body.id, name: req.body.name, email: req?.body.email,scam: req?.body.scam});
  return res.status(200).send(users);
}
module.exports = { GetCart, postUserData };
