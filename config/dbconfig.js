const { MongoClient } = require("mongodb");
const { default: mongoose } = require("mongoose");
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.ATLAS_URI);
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = dbConnection;