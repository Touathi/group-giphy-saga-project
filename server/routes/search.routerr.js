const express = require('express');
const pool = require('../modules/pool');

const  axios = require('axios')

const router = express.Router();

router.get('/', (req, res) => {
  // return giphy api request
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=pizza&limit=20`)

  .then(response => {
    console.log(response.data);
    res.send(response.data)
})
.catch(error => {
    console.log('Error', error);
})
});

module.exports = router;





