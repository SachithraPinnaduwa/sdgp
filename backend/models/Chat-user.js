import { randomUUID } from 'crypto';
import mongoose from 'mongoose';
const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        dafault: randomUUID(),
    },
    role: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
// Defining the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String, // Direct use of String, as mongoose.Schema.Types.String is unnecessary
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    chats:[chatSchema]
});

// Creating the User model
export default mongoose.model('ChatUser', userSchema);
