const router = require("express").Router();
const { health } = require("./health");

router.get("/health", health);

module.exports = router;
