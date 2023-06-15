const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
  // return all categories
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=pizza&limit=20`)

  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
