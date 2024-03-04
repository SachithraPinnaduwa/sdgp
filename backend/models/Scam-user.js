import mongoose from 'mongoose';

// Defining the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String, // Direct use of String, as mongoose.Schema.Types.String is unnecessary
        required: true,
        unique: true
    },title: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    scam: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    }
});

// Creating the User model
const LoginUser = mongoose.model('LoginUser', userSchema);

// Exporting the User model
export { LoginUser };
