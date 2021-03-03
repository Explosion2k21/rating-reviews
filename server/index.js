const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const path = require("path");
const app = express();
var cors = require("cors");

app.use(cors());
const { routerRating } = require("./routes/routerRating.js");
const { routerRatingBar } = require("./routes/routerRatingBar.js");
const { routerReviews } = require("./routes/routerReviews.js");
const port = process.env.PORT || 3004;
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/reviews/rating", routerRating);
app.use("/reviews/ratingBar", routerRatingBar);
app.use("/reviews/reviews", routerReviews);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
