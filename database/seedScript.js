const db = require('./index.js');
const Review = require('./schema.js');
const faker = require('faker');
//TODO: drop database here
//todo outer forloop 1-100 for each property
    //inner forloop 1 -randomnumber for reviews
    //create object and push to array
Review.remove({}, function(err) {
  console.log('collection removed')
});

const dataArray = [];
for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 3; j++) {
    const testData = {
      houseId: i,
      userId: 23,
      userName: 'Joe Schmoe',
      userImage: 'https://icon-library.net/images/smily-face-icon/smily-face-icon-3.jpg',
      comment: 'the walls are purple',
      dateCreated: new Date('December 17, 1995 03:24:00'),
      starRatings: {
        accuracy: 5,
        communication: 4,
        location: 3,
        checkIn: 2,
        value: 1,
        cleanliness: 1
      },
      response: {
        name: 'Burt Renolds',
        image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj99qDxopXkAhWFvJ4KHc3nA1MQjRx6BAgBEAQ&url=http%3A%2F%2Fmentalfloss.com%2Farticle%2F68855%2F10-surprising-facts-about-burt-reynolds&psig=AOvVaw1C4DUQ4JCm-RXcQ92s4NF2&ust=1566521853339680',
        comment: 'this place stinks',
        date: new Date('December 17, 1995 03:24:00')
      }
    };
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