const express = require('express');
const app = express();
const Review = require('../database/schema.js');
const port = 5000;
const bodyParser = require('body-parser')
var cors = require('cors');
// const exports = module.exports = {};

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.use(express.static('./client/dist'));
app.use(express.static('./images'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.get('/reviews/:houseId', function(req, res) {
  const query = req.query;
  const params = req.params;
  if (query.search !== undefined) {
    //if query params includes search -- add search to the query
    params['comment'] = { "$regex": query.search, "$options": "i" }
  }
  Review.find(params, null, {skip: parseInt(query.offset), limit: parseInt(query.limit)}, function(err, results) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
});
const roundNearHalf = function(number) {
  return (Math.round(number * 2) / 2).toFixed(1);
};
const getAverages = function(data) {

  let accuracy = 0;
  let communication = 0;
  let location = 0;
  let checkIn = 0;
  let cleanliness = 0;
  let value = 0;
  let count = 0;
  for (var i = 0; i < data.length; i++) {
    accuracy += data[i].starRatings.accuracy;
    communication += data[i].starRatings.communication;
    location += data[i].starRatings.location;
    checkIn += data[i].starRatings.checkIn;
    value += data[i].starRatings.value;
    cleanliness += data[i].starRatings.cleanliness;
    count += 1;
  }
  const result = {
    accuracy: roundNearHalf(accuracy / count),
    communication: roundNearHalf(communication / count),
    location: roundNearHalf(location / count),
    checkIn: roundNearHalf(checkIn / count),
    value: roundNearHalf(value / count),
    cleanliness: roundNearHalf(cleanliness / count),
  }
  result.overall = roundNearHalf((accuracy + communication + location + checkIn + value + cleanliness) / (6 * count));
  result.numReviews = data.length;
  return result;
}
app.get('/ratings/:houseId', function(req, res) {
  const params = req.params;
  Review.find(params, function(err, results) {
    if (err) {
      res.status(400).send(err);
    } else {
      const averages = getAverages(results);
      res.status(200).send(averages);
    }
  })
});

app.post('/reviews', function(req, res) {
  Review.create(req.body, (err, review) => {
    if (err) {
      console.log(err);
      res.status(500).json({message: 'Error creating review'});
    } else {
      res.status(201).json ({
          message: 'Handling POST request to /ratings',
          createdReview: review
         });
    }
  });

});

app.put('/reviews/:revId', function(req, res) {
  Review.findByIdAndUpdate(req.params.revId, req.body, (err,data) => {
    if(err) {
      console.log(err);
    }
    console.log(data);
  }).
  then(() => res.status(200).send('done')).
  catch((err) => res.status(500).send(err));
});

app.delete('/reviews/:revId', function(req, res) {
  Review.findByIdAndRemove(req.params.revId, req.body, (err,data) => {
    if(err) {
      console.log(err);
    }
    console.log(data);
  }).
  then(() => res.status(200).send('Deleted!')).
  catch((err) => res.status(500).send(err));
});



module.exports = app;