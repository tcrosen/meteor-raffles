Raffles = new Mongo.Collection('raffles');

Raffles.current = function() {
  return Raffles.findOne({ isActive: true });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Raffles.remove({});

    Raffles.insert({
      product: 'iPad Air',
      startDate: new Date(2015, 03, 1),
      endDate: new Date(2015, 03, 30),
      isActive: true
    });

    Raffles.insert({
      product: 'Michael Kors Purse',
      startDate: new Date(2015, 04, 1),
      endDate: new Date(2015, 04, 30),
      isActive: false
    });
  });
}
