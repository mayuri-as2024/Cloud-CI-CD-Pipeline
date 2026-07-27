const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        deployments: 12,
        containers: 1,
        pipeline: "Successful",
        uptime: "99.9%"
    });
});

module.exports = router;