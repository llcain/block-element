const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// simple route

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application!!" });
});

app.listen(5000, () => {
    console.log(`Server started at ${5000}`)
});