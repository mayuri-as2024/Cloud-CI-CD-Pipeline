const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        "GitHub Connected",
        "Jenkins Pipeline Successful",
        "Docker Image Created",
        "Ready for Deployment"
    ]);
});

module.exports = router;