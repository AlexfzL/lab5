var data = require("../data.json");

exports.addFriend = function(request, response) {
  // Your code goes here
  var name = request.query.name;
  var des = request.query.description;
  var newFriend = {
    "name": name,
    "description": des,
    "imageURL": "http://lorempixel.com/500/500/people"
  };
  data.friends.push(newFriend);
  response.render('index', data);
}