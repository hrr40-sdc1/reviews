const express = require('express');
const app = express();
const ObjectID = require('mongodb').ObjectID;
const Review = require('../database/schema.js');
const port = 5000;


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/reviews/:houseId', function(req, res) {
  const query = req.query;
  const params = req.params;
  Review.find(params, null, query, function(err, results) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
});

const calculateAverages = function(array) {
  return array;
}
