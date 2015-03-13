Raffles = new Mongo.Collection('raffles');

Raffles.current = function() {
  return Raffles.findOne({ isActive: true });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Raffles.remove({});

    Raffles.insert({
      title: 'iPad Air',
      mainImage: 'images/ipad.jpeg',
      startDate: new Date(2015, 03, 1),
      endDate: new Date(2015, 03, 30),
      isActive: true
    });

    Raffles.insert({
      title: 'Michael Kors Purse',
      mainImage: 'images/purse.jpg',
      startDate: new Date(2015, 04, 1),
      endDate: new Date(2015, 04, 30),
      isActive: false
    });
  });
}
