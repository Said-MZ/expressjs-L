const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const { login, dashboard } = require("../controllers/main");

router.post("/login", login);
router.get("/dashboard", authMiddleware, dashboard);

module.exports = router;
