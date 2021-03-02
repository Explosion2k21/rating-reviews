const routerRating = require("express").Router();
const { getRating, getRatingBar } = require("../controllers/getRating.js");
routerRating.get("/", getRating);
routerRating.get("/meta", getRatingBar);



module.exports.routerRating = routerRating;
