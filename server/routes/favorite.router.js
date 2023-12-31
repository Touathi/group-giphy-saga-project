const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')
require('dotenv').config();

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('favorite get images');
  const queryText = `SELECT * FROM "favorite";`
  pool.query(queryText)
    .then( result => {
      res.send(result.rows)
    })
    .catch(err => {
      console.log(`Error in getting favorites ${err}`);
      res.sendStatus(500);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log(req.body);

  
const queryText = ` INSERT INTO "favorite" ("giphy_name", "giphy_url")
  VALUES($1, $2)
`
pool.query(queryText, [req.body.title, req.body.url])
.then(result => {
  res.sendStatus(200);
})
.catch(error => {
  console.log('error posting', error);
  res.sendStatus(500)
})
})
// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body
  idToSetCategory = req.body.id
  categoryToSet = req.body.category_id

  console.log(idToSetCategory);
  console.log(categoryToSet);
  
  categoryId = [ categoryToSet ]
  const queryText = `
    UPDATE "favorite" 
    SET "category_id" = $1
    WHERE "id" = ${idToSetCategory};
    `
 pool.query(queryText, categoryId)
  .then( result => {
    console.log(`Updated/Set giphy id ${idToSetCategory} category id to ${categoryToSet}`);
    res.send(200)
  })
  .catch(error => {
    console.log('Error in updating category id', error);
    res.sendStatus(500)
  })
  // req.body should contain a category_id to add to this favorite image
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const queryText = `DELETE FROM "favorite" WHERE "id"=$1`
  pool.query(queryText,[req.params.id/1])
  .then(() => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error deleting picture', error);
    res.sendStatus(200);
  })
  
});

module.exports = router;
