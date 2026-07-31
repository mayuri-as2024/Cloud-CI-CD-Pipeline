const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ======================
// Dashboard Home Page
// ======================
app.get("/", (req, res) => {
res.send(`

<!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DeployFlow Dashboard</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:#f4f7fb;
    color:#333;
}

header{
    background:#1976d2;
    color:white;
    padding:25px;
    text-align:center;
    font-size:32px;
    font-weight:bold;
}

.sub{
    text-align:center;
    margin-top:10px;
    color:#555;
    font-size:16px;
}

.container{
    width:90%;
    max-width:1100px;
    margin:30px auto;
}

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
}

.card{
    background:white;
    padding:25px;
    border-radius:12px;
    box-shadow:0 4px 12px rgba(0,0,0,.12);
    text-align:center;
}

.card h2{
    color:#1976d2;
    margin-bottom:15px;
    font-size:20px;
}

.value{
    font-size:22px;
    font-weight:bold;
    color:green;
}

.section{
    background:white;
    margin-top:30px;
    padding:25px;
    border-radius:12px;
    box-shadow:0 4px 12px rgba(0,0,0,.12);
}

.section h2{
    color:#1976d2;
    margin-bottom:20px;
}

.buttons{
    display:flex;
    flex-wrap:wrap;
    gap:15px;
    justify-content:center;
}

button{
    padding:12px 20px;
    font-size:16px;
    border:none;
    border-radius:8px;
    background:#1976d2;
    color:white;
    cursor:pointer;
}

button:hover{
    background:#0d47a1;
}

footer{
    margin-top:40px;
    background:#1976d2;
    color:white;
    text-align:center;
    padding:20px;
}
</style>

</head>

<body>

<header>
☁ DeployFlow Dashboard
</header>

<div class="sub">
Cloud-Based Automated CI/CD Deployment Platform
</div>

<div class="container">

<div class="grid">

<div class="card">
<h2>Application</h2>
<div class="value">Running</div>
</div>

<div class="card">
<h2>Jenkins</h2>
<div class="value">Connected</div>
</div>

<div class="card">
<h2>Docker</h2>
<div class="value">Running</div>
</div>

<div class="card">
<h2>Kubernetes</h2>
<div class="value">Running</div>
</div>

<div class="card">
<h2>Version</h2>
<div class="value">v1.0.0</div>
</div>

<div class="card">
<h2>Environment</h2>
<div class="value">Development</div>
</div>

</div>

<div class="section">

<h2>Project Workflow</h2>

<div class="buttons">

<button onclick="window.location='/health'">/health</button>

<button onclick="window.location='/status'">/status</button>

<button onclick="window.location='/version'">/version</button>

<button onclick="window.location='/logs'">/logs</button>

<button onclick="window.location='/deployment'">/deployment</button>

<button onclick="window.location='/pipeline'">/pipeline</button>

<button onclick="window.location='/metrics'">/metrics</button>

<button onclick="window.location='/history'">/history</button>

</div>

</div>

<div class="section">

<h2>Deployment Pipeline</h2>

<p style="text-align:center;font-size:18px;">

GitHub → Jenkins → Docker → Docker Hub → Kubernetes

</p>

</div>

</div>

<footer>

DeployFlow | Software Engineering Cloud Project

</footer>

</body>

</html>
  `);
});

// ======================
// Health API
// ======================
app.get("/health", (req, res) => {
res.json({
status: "Healthy",
uptime: process.uptime().toFixed(2) + " seconds"
});
});

// ======================
// Status API
// ======================
app.get("/status", (req, res) => {
res.json({
application: "DeployFlow",
server: "Running",
jenkins: "Configured",
docker: "Available"
});
});

// ======================
// Version API
// ======================
app.get("/version", (req, res) => {
res.json({
application: "DeployFlow",
version: "1.0.0",
release: "Production Ready"
});
});

// ======================
// Logs API
// ======================
app.get("/logs", (req, res) => {
res.json({
logs: [
"GitHub repository connected",
"Jenkins pipeline executed successfully",
"Docker image built successfully",
"Docker image pushed to Docker Hub",
"Kubernetes deployment created",
"Service exposed successfully"
]
});
});

// ======================
// Deployment API
// ======================
app.get("/deployment", (req, res) => {
res.json({
application: "DeployFlow",
version: "1.0.0",
buildNumber: "#6",
environment: "Development",
pipelineStatus: "Connected",
dockerStatus: "Running",
dockerHub: "Image Available",
kubernetesStatus: "Running",
lastDeployment: "Successful"
});
});

// ======================
// Pipeline API
// ======================
app.get("/pipeline", (req, res) => {
res.json({
repository: "GitHub",
continuousIntegration: "Jenkins",
containerization: "Docker",
imageRegistry: "Docker Hub",
orchestration: "Kubernetes",
status: "Pipeline Working Successfully"
});
});

// ======================
// Metrics API
// ======================
app.get("/metrics", (req, res) => {
res.json({
application: "DeployFlow",
hostname: os.hostname(),
platform: os.platform(),
architecture: os.arch(),
cpuCores: os.cpus().length,
totalMemory: Math.round(os.totalmem() / 1024 / 1024) + " MB",
freeMemory: Math.round(os.freemem() / 1024 / 1024) + " MB",
uptime: Math.floor(os.uptime() / 60) + " Minutes",
nodeVersion: process.version,
status: "Running"
});
});

// ======================
// Deployment History API
// ======================
app.get("/history", (req, res) => {
res.json([
{
id: 1,
version: "1.0.0",
status: "Success",
date: "23 July 2026"
},
{
id: 2,
version: "1.1.0",
status: "Success",
date: "26 July 2026"
},
{
id: 3,
version: "1.2.0",
status: "Running",
date: "31 July 2026"
}
]);
});

// ======================
// Start Server
// ======================
app.listen(PORT, () => {
console.log(`DeployFlow server running on http://localhost:${PORT}`);
});


