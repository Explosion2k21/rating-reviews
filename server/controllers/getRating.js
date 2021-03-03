const TOKEN = "8b3ad621b6925f7956675d57073d216fa9211aa4";
const axios = require("axios");
module.exports = {
  getRating: (req, res) => {
    axios
      .get(
        "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11048",
        {
          headers: {
            Authorization: TOKEN,
          },
        }
      )
      .then(({ data }) => {
        res.send(data);
      })
      .catch((err) => res.send(err));
  },
  getRatingBar: (req, res) => {
    axios
      .get(
        "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=11048",
        {
          headers: {
            Authorization: TOKEN,
          },
        }
      )
      .then(({ data }) => {
        res.send(data);
      })
      .catch((err) => {
        console.log("lool", err);
        res.send(err);
      });
  },
};
