// Import express
const express = require('express');
const cors = require('cors');

const host = '0.0.0.0';
const port = 8080;

const app = express();

app.use(cors());
app.use(express.json());

// localhost:8080/greeting
app.get("/greeting", function (request, response) {
  console.log("YAY! New request is coming!");
  response.status(200).send("Hello world!");
});