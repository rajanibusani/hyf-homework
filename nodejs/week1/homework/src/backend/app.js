const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews")
const reservations = require("./data/reservations")

// this is where you will be adding your routes
const mealsWithReviews = meals.map(meal=>{
  meal.reviews= [];
  reviews.filter(mealReview => {
    if(mealReview.mealId === meal.id){
      meal.reviews.push(mealReview) }    
  });
  return meal;
});

app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});
app.get("/meals", async (request, response) => {
  response.send(mealsWithReviews);
});

app.get("/cheap-meals", async (request, response) => {
  response.send(mealsWithReviews.filter(mealobj=>mealobj.price<90));
});

app.get("/large-meals", async (request, response) => {
  response.send(mealsWithReviews.filter(mealobj=>mealobj.maxNumberOfGuests>=6));
});
app.get("/meal", async (request, response) => {
  response.send(mealsWithReviews[Math.floor(Math.random() * mealsWithReviews.length)]);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});
app.get("/reservation", async (request, response) => {
  response.send(reservations[Math.floor(Math.random() *reservations.length)]);
});
module.exports = app;
