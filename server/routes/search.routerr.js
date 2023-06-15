const express = require('express');
const pool = require('../modules/pool');

const  axios = require('axios')

const router = express.Router();

router.get('/:id', (req, res) => {
  console.log(req.params);
  const query = req.params.id;
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=20`)

  .then(response => {
    console.log(response.data);
    res.send(response.data)
})
.catch(error => {
    console.log('Error', error);
})
});

module.exports = router;





