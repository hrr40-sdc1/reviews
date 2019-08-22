const db = require('./index.js');
const Review = require('./schema.js');
const faker = require('faker');
//TODO: drop database here

Review.remove({}, function(err) {
  console.log('collection removed')
});
const randomNumber = function() {
  return Math.floor(Math.random() * Math.floor(5));
}
const randomNumberReviews = function() {
  return Math.floor(Math.random() * Math.floor(75));
}
const dataArray = [];
for (var i = 0; i < 100; i++) {
  var randomReviewLength = randomNumberReviews();
  for (var j = 0; j < randomReviewLength; j++) {
    const testData = {
      houseId: i,
      userId: faker.random.number(),
      userName: faker.name.findName(),
      userImage: faker.image.imageUrl(),
      comment: faker.lorem.paragraph(),
      dateCreated: faker.date.past(),
      starRatings: {
        accuracy: randomNumber(),
        communication: randomNumber(),
        location: randomNumber(),
        checkIn: randomNumber(),
        value: randomNumber(),
        cleanliness: randomNumber()
      }
    };
    if (j % randomNumber() === 0) {
      testData.response = {
        name: faker.name.findName(),
        image: faker.image.imageUrl(),
        comment: faker.lorem.paragraph(),
        date: faker.date.past()
      }
    }
    dataArray.push(testData);
  }
}



const seedData = function () {
  Review.create(dataArray)
    .then(() => {
      db.disconnect();
    })
    .catch((err) => {
      console.log(">>>>>>>>>> " + err);
    })
}
seedData();

// response: {
//   name: faker.name.findName(),
//   image: faker.image.imageUrl(),
//   comment: faker.lorem.paragraph(),
//   date: faker.date.past()
// }
// const insertSampleBlogs = function() {
//   Blog.create(samplePosts)
//     .then(() => db.disconnect());
// };
// const testData = {
//   houseId: 1,
//   userId: 23,
//   userName: 'Joe Schmoe',
//   userImage: 'https://icon-library.net/images/smily-face-icon/smily-face-icon-3.jpg',
//   comment: 'the walls are purple',
//   dateCreated: new Date('December 17, 1995 03:24:00'),
//   starRatings: {
//     accuracy: 5,
//     communication: 4,
//     location: 3,
//     checkIn: 2,
//     value: 1,
//     cleanliness: 1
//   },
//   response: {
//     name: 'Burt Renolds',
//     image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj99qDxopXkAhWFvJ4KHc3nA1MQjRx6BAgBEAQ&url=http%3A%2F%2Fmentalfloss.com%2Farticle%2F68855%2F10-surprising-facts-about-burt-reynolds&psig=AOvVaw1C4DUQ4JCm-RXcQ92s4NF2&ust=1566521853339680',
//     comment: 'this place stinks',
//     date: new Date('December 17, 1995 03:24:00')
//   }
// };