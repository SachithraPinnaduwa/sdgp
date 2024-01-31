const axios = require("axios");

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

module.exports = { GetCart };
