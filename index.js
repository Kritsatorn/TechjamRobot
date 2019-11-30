// Import express
const express = require('express');
const cors = require('cors');

const host = '0.0.0.0';
const port = 8080;

const app = express();

app.use(cors());
app.use(express.json());

let robots = [{"a":1}];
let currentId = 0;

// localhost:8080/greeting
app.get("/greeting", function (request, response) {
  console.log("YAY! New request is coming!");
  response.status(200).send(robots);
});

// localhost:8080/robots
app.get("/robots", function (request, response) {
  response.status(200).send("robots");
});

// http://localhost:8080/distance
app.post("/distance", function (request, response) {

  const {
    first_pos,
    second_pos
  } = request.body;

  const newRobot = {
    first_pos: first_pos,
    second_pos: second_pos,
    id: currentId
  };
  robots.push(newRobot)
  currentId += 1;
  console.log(a)
  response.sendStatus(201);
});


