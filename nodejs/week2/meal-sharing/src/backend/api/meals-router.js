const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log("in /api/meals", request.query);
    const maxPrice = request.query.maxPrice;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;

    switch (true) {
      case (Object.keys(request.query).length === 0):
        response.send(meals);
        break;
      case ('maxPrice' in request.query):
        if (parseInt(maxPrice) < 0 || isNaN(parseInt(maxPrice))) {
          response.status(400).send();
        } else {
          const mealsWithMaxPrice = meals.filter(meal => meal.price <= parseInt(maxPrice));
          response.send(mealsWithMaxPrice);
        }
        break;
      case ('title' in request.query):
        let regExp = new RegExp(title, "i");
        const mealsWithTitle = meals.filter(meal => meal.title.match(regExp));
        response.send(mealsWithTitle);
        break;
      case ('createdAfter' in request.query):
        if (Number.isNaN(Date.parse(createdAfter))) {
          response.status(400).send();
        } else {
          const mealsCreatedAfterDate = meals.filter(meal => Date.parse(meal.createdAt) >= Date.parse(createdAfter));
          response.send(mealsCreatedAfterDate);
        }
        break;
      case ('limit' in request.query):
        if (isNaN(parseInt(limit))) {
          response.status(400).send();
        } else {
          const mealsWithLimit = meals.slice(0, limit)
          response.send(mealsWithLimit)
        }
        break;
      default:
        response.send('No search results found')
    }
  } catch (error) {
    throw error;
  }
});


router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    if (parseInt(id) < 0 || isNaN(parseInt(id))) {
      response.status(400).send()
    } else {
      const mealWithId = meals.filter(meal => meal.id === parseInt(id));
      mealWithId.length === 0 ? response.send(`Meal with id  ${id} is not found`) : response.send(mealWithId[0]);
    }

  } catch (error) {
    throw error;
  }
});

module.exports = router;

