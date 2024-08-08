// PURPOSE: Establish connection to the database
const mongoose = require("mongoose");

// Connect to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/travel-buddy");

module.exports = mongoose.connection;
