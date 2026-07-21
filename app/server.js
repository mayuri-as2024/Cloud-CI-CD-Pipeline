const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Cloud Deployment Successful!");
});

// Health Check Route
app.get("/health", (req, res) => {
    res.json({
        status: "Healthy",
        uptime: process.uptime().toFixed(2) + " seconds"
    });
});

// Version Route
app.get("/version", (req, res) => {
    res.json({
        application: "Cloud-Based CI/CD Pipeline",
        version: "1.0.0",
        release: "Initial Release"
    });
});

// Deployment Details Route
app.get("/deployment", (req, res) => {
    res.json({
        application: "Cloud-Based CI/CD Pipeline",
        version: "1.0.0",
        buildNumber: "#1",
        environment: "Development",
        pipelineStatus: "Not Connected",
        dockerStatus: "Not Deployed",
        kubernetesStatus: "Not Deployed",
        awsStatus: "Not Deployed",
        lastDeployment: "Not Yet Deployed"
    });
});

// Pipeline Route
app.get("/pipeline", (req, res) => {
    res.json({
        stage1: "GitHub ",
        stage2: "Jenkins ",
        stage3: "Docker ",
        stage4: "Kubernetes ",
        stage5: "AWS EC2 "
    });
});

// Server Start
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});