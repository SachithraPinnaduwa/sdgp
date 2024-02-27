// Import statements
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from './db/connection.js'; // Assuming you have a connection.js in a db folder
import login from './routes/login.js'; // Make sure login is also an ES module

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
connectToDatabase()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));

// Using the login router
app.use('/login', login);

// Main page route
app.get('/', (req, res) => {
  res.send({ message: "main page of server" });
});
