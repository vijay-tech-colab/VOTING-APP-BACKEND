const mongoose = require('mongoose');

const dbConnection = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('database connection established');
}
module.exports = dbConnection;