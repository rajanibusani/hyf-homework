const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router");
const reservationsRouter = require("./api/reservations-router");
const reviewsRouter = require("./api/reviews-router");


app.use("/meals", mealsRouter);
app.use("/reservations", reservationsRouter);
app.use("/reviews", reviewsRouter);

module.exports = app;

