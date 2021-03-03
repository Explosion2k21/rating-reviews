const axios = require("axios");
const TOKEN = "0202c8e5939a3852d42b88438303343df27d7feb";

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
