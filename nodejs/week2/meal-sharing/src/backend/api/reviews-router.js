const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews.json");


router.get("/", async (request, response) => {
  try {
    console.log("in /api/reviews");
    response.send(reviews);
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
      const reviewWithId = reviews.filter(review => review.id === parseInt(id));
      reviewWithId.length === 0 ? response.send(`Review with the id ${id} is not found`) : response.send(reviewWithId[0]);
    }

  } catch (error) {
    throw error;
  }
});

module.exports = router;