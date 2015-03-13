Raffles = new Mongo.Collection('raffles');

if (Meteor.isServer) {
  Meteor.startup(function () {
    Raffles.remove({});

    Raffles.insert({
      product: 'iPad Air',
      startDate: new Date(2015, 03, 1),
      endDate: new Date(2015, 03, 30)
    });
  });
}
