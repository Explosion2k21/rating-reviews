const axios = require("axios");
const TOKEN = process.env.TOKEN || "d730a5a7bf37cbef867777e0701d7f4d7171d2d3";

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
