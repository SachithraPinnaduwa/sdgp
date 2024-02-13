// Importing Mongoose with ES Module syntax
import mongoose from 'mongoose';

// Defining the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String, // Direct use of String, as mongoose.Schema.Types.String is unnecessary
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    scam: {
        type: String,
        required: true
    }
});

// Creating the User model
const User = mongoose.model('User', userSchema);

// Exporting the User model
export { User };
