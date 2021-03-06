const axios = require("axios");
const TOKEN =  process.env.TOKEN || "38191b79b05a24118be0ff19f7b4797a6c14b6c4";

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
