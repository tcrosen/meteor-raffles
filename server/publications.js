Meteor.publish('raffles', function() {
  return Raffles.find({});
});