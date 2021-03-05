const axios = require("axios");
const TOKEN =  process.env.TOKEN || "3a09d90aa32dbe7c0c52acc2d435bfa2635756a1";

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
