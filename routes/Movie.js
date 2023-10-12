const express = require("express")
const router = express.Router()
const { movie, getAllMovies } = require("../controllers/Movies");

router.post("/create", movie)
router.get("/getAllMovies",getAllMovies);

module.exports = router;