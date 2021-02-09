const express = require("express");
const router = express.Router();
const reservations = require("./../data/reservations.json");


router.get("/", async (request, response) => {
  try {
    console.log("in /api/reservations");
    response.send(reservations);
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
      const reservationWithId = reservations.filter(reservation => reservation.id === parseInt(id));
      reservationWithId.length === 0 ? response.send(`Reservation with id  ${id} is not found`) : response.send(reservationWithId[0]);
    }

  } catch (error) {
    throw error;
  }
});


module.exports = router;