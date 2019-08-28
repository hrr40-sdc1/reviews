var request = require("request"),
    assert = require('assert'),
    app = require("./index.js"),
    base_url = "http://localhost:5000/",
    ratingsUrl = "http://localhost:5000/ratings/6",
    reviewUrl = "http://localhost:5000/reviews/76?offset=0&limit=10",
    searchUrl = reviewUrl + "&search=debitis"


describe("GET /", function() {
  it("returns status code 404", function(done) {
    request.get(base_url, function(error, response, body) {
      assert.equal(404, response.statusCode);
      done();
    });
  });

});
describe("GET /ratings/6", function() {
  it("returns status code 200", function(done) {

    request.get(ratingsUrl, function(error, response, body) {
      assert.equal(200, response.statusCode);
      done();
    });
  });
  it("has an accuracy of 4.0", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.equal("4.0", parsed.accuracy);
      done();
    });
  });
  it("has a communication of 1.0", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.equal("1.0", parsed.communication);
      done();
    });
  });
  it("has a location of 2.0", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.equal("2.0", parsed.location);
      done();
    });
  });
  it("has a checkIn of 4.0", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.equal("4.0", parsed.checkIn);
      done();
    });
  });
  it("has a valueof 3.0", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.equal("3.0", parsed.value);
      done();
    });
  });
  it("has a cleanliness 3.0", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.equal("3.0", parsed.cleanliness);
      done();
    });
  });
  it("has a cleanliness 3.0", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.equal("3.0", parsed.cleanliness);
      done();
    });
  });
  it("has a overall 3.0", function(done) {
    request.get(ratingsUrl, function(error, response, body) {
      const parsed = JSON.parse(body)
      assert.equal("3.0", parsed.overall);
      done();
    });
  });
});

describe("GET /reviews/6", function() {
  it("returns status code 200", function(done) {

    request.get(reviewUrl, function(error, response, body) {
      assert.equal(200, response.statusCode);
      done();
    });
  });
  it("has a working limiter", function(done) {
    request.get(reviewUrl, function(error, response, body) {
      const parsed = JSON.parse(body);
      assert.equal(10, parsed.length);
      done();
    });
  });
  it("has a working search parameter", function(done) {
    request.get(searchUrl, function(error, response, body) {
      const parsed = JSON.parse(body);
      assert.equal(4, parsed.length);
      done();
    });
  });

});