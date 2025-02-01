require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ message: "CI/CD Deployment Successful!  yayyyyyyyy !!!!!" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
