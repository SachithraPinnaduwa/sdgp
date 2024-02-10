
const connect = require('mongoose').connect;
const disconnect = require('mongoose').disconnect;
  async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        throw new Error('First error', error);
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        throw new Error('Error disconnecting from database', error);
    }
}

 module.exports = {disconnectFromDatabase, connectToDatabase};