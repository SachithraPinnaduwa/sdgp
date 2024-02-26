// Import statements for ES Modules
import axios from 'axios';
import { LoginUser } from '../models/Scam-user.js';
// Function to post user data
async function postUserData(req, res) {
  const { name,email,province,scam } = req.body;
  const newUser = new LoginUser({name,email,province,scam});
  if (req.body.name === undefined) {
    return res.status(400).send({ error: "Name is required" });
  }
  try {
    const savedUser = await newUser.save();
    return res.status(200).send(savedUser);
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
}

// Function to search for a user
async function searchUser(req, res) {
  const { name } = req.query;
  try {
    const user = await LoginUser.findOne({ name: name });
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

// Exporting the functions using ES Module syntax
export { postUserData, searchUser };
