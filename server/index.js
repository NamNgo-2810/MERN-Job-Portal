const express = require("express");
const database = require("./database");

const jobsRoute = require("./routes/jobsRoute");
const usersRoute = require("./routes/usersRoute");

const app = express();

app.use(express.json());
app.use("/api/jobs", jobsRoute);
app.use("/api/users", usersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening on port " + port));
