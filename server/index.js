const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();
const TOKEN = process.env.TOKEN || "13dab64dc9d00c8dbefcc17995eb175185334b62";
const port = process.env.PORT || 3004;

const { routerRating } = require("./routes/routerRating.js");
const { routerRatingBar } = require("./routes/routerRatingBar.js");
const { routerReviews } = require("./routes/routerReviews.js");

app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/reviews/rating", routerRating);
app.use("/reviews/ratingBar", routerRatingBar);
app.use("/reviews", routerReviews);

app.listen(port, () => {
  console.log(`server running at: http://${process.env.DEV_HOST}:${port}`);
});
