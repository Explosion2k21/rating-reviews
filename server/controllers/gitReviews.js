const axios = require("axios");
const TOKEN =  process.env.TOKEN || "22c9c42b980e7d2e44e8bc90b7852af8d96b1cad";

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
