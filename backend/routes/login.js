// Import statements for ES Modules
import express from 'express';
import { User } from '../mongoose/schemas/user.js'; // Adjust the path as necessary
import { body, query, validationResult } from 'express-validator';
import { postUserData, searchUser } from '../controllers/logincontroller.js'; 

// Creating a router instance using express
const router = express.Router();

// Route for posting user data with validation
router.route("/").post(
    body("name").isString().notEmpty().withMessage("username cannot be empty"),
    (req, res, next) => {
        const result = validationResult(req);
        console.log(result);
        if (result.isEmpty()) {
            next();
        } else {
            res.status(400).send(result.array());
        }
    },
    postUserData
);

// Route for searching a user with validation
router.post("/search",
    query("name").isString().notEmpty().withMessage("username cannot be empty"),
    (req, res, next) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
            next();
        } else {
            console.log(result.array());
            res.status(400).send(result.array());
        }
    },
    searchUser
);

// Exporting the router for use in other parts of the application
export default router;
