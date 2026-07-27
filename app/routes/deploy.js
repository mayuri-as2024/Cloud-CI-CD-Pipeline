const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    res.json({
        deployment: "Started",
        container: "cloud-app",
        status: "Success"
    });
});

module.exports = router;