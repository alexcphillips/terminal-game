const app = require("./app");
const database = require("../database");

database.connect();
app.listen(process.env.PORT || 3000, () => {
    console.log("Server started successfully");
});
