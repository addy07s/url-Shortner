const mongoose = require("mongoose");

async function connectToMongoDB(connectionString) {
    try {
        await mongoose.connect(connectionString);
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

module.exports = connectToMongoDB;
