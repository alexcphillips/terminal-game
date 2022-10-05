const app = require("./app");
// const database = require("../database");

(async () => {
    // await database.connect();
})();

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started successfully");
});
