const routerReviews = require("express").Router();
const {  getAllReviews,getReviews,addReview } = require("../controllers/gitReviews.js");
routerReviews.get("/:count", getReviews);
routerReviews.get("/", getAllReviews);
routerReviews.post("/",addReview)

module.exports.routerReviews = routerReviews;
