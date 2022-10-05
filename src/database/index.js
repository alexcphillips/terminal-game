const { MongoClient } = require("mongodb");

let database = null;
const client = new MongoClient("mongodb://localhost:27017/terminal-game");

const connect = () => {
    try {
        database = client.db("terminal-game");
        process.on("SIGINT", async () => {
            await client.close();
            console.log("closed db connection due to error or program end");
            process.exit();
        });
        console.log("Connected to database");
    } catch (err) {
        console.log(err.stack);
    }
};

module.exports = { connect, database };
