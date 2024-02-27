// Import statements for ES Modules
import express from 'express';
import { body, query, validationResult } from 'express-validator';
import { postUserData, searchUser } from '../controllers/scam-controller.js'; 

// Creating a router instance using express
const routerScam = express.Router();

// Route for posting user data with validation
routerScam.route("/").post(
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
routerScam.post("/search",
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
export default routerScam;
