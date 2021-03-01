const routerRatingBar = require("express").Router();
const {  getRatingBar } = require("../controllers/getRating.js");
routerRatingBar.get("/", getRatingBar);

module.exports.routerRatingBar = routerRatingBar;
