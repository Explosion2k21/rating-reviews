const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const path = require("path");
const app = express();
var cors = require("cors");
const TOKEN = process.env.TOKEN || "38191b79b05a24118be0ff19f7b4797a6c14b6c4";

const port = process.env.PORT || 3004;

app.use(cors());
const { routerRating } = require("./routes/routerRating.js");
const { routerRatingBar } = require("./routes/routerRatingBar.js");
const { routerReviews } = require("./routes/routerReviews.js");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/reviews/rating", routerRating);
app.use("/reviews/ratingBar", routerRatingBar);
app.use("/reviews", routerReviews);

app.listen(port, () => {
  console.log(`server running at: http://${process.env.DEV_HOST}:${port}`);
});
