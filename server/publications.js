Meteor.publish('raffles', function() {
  return Raffles.find({});
});

Meteor.publish('raffle', function(id) {
  check(id, Number);
  return Raffles.findOne(id);
});