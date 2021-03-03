const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const path = require("path");
const app = express();
const { routerRating } = require("./routes/routerRating.js");
const { routerRatingBar } = require("./routes/routerRatingBar.js");
const { routerReviews } = require("./routes/routerReviews.js");
const port = process.env.PORT || 3004;

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/rating", routerRating);
app.use("/ratingBar", routerRatingBar);
app.use("/reviews", routerReviews);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
