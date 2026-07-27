const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        application: "CloudDeployX",
        server: "Running",
        jenkins: "Configured",
        docker: "Available"
    });
});

module.exports = router;