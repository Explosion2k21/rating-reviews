const axios = require("axios");
const TOKEN = "3a09d90aa32dbe7c0c52acc2d435bfa2635756a1";

module.exports = {
  getReviews: (req, res) => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11048&count=${req.params.count}`,
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
  getAllReviews: (req, res) => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11048`,
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
  addReview: (req, res) => {
    axios
      .post(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews`, {
        headers: {
          Authorization: TOKEN,
        },
        data: req.body,
      })
      .then(() => {
        res.end();
      })
      .catch((err) => res.send(err));
  },
};
