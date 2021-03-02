const routerRating = require("express").Router();
const { getRating, getRatingBar } = require("../controllers/getRating.js");
const { getReviews } = require("../controllers/gitReviews.js");
routerRating.get("/", getRating);
routerRating.get("/meta", getRatingBar);
routerRating.get("/:count", getReviews);

module.exports.routerRating = routerRating;
