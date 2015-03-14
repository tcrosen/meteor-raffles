var today = moment().hours(0).minutes(0).seconds(0);
var yesterday = today.clone().subtract(1, 'days');
var tomorrow = today.clone().add(1, 'days');

Meteor.startup(function() {
  Raffles.remove({});

  if (Raffles.find().count() === 0) {
    Raffles.insert({
      title: 'GoPro',
      mainImage: 'images/gopro.jpg',
      startDate: yesterday.toDate(),
      endDate: yesterday.toDate(),
      retailPrice: 300.00,
      entryPrice: 3.00,
      maxEntries: 100,
      isActive: false,
      entries: []
    });

    Raffles.insert({
      title: 'iPad Air',
      mainImage: 'images/ipad.jpeg',
      startDate: today.toDate(),
      endDate: tomorrow.toDate(),
      retailPrice: 500.00,
      entryPrice: 5.00,
      maxEntries: 100,
      isActive: true,
      entries: [{ userId: 100 }, { userId: 200 }, { userId: 300 }]
    });

    Raffles.insert({
      title: 'Michael Kors Purse',
      mainImage: 'images/purse.jpeg',
      startDate: tomorrow.toDate(),
      endDate: tomorrow.toDate(),
      retailPrice: 900.00,
      entryPrice: 10.00,
      maxEntries: 100,
      isActive: false,
      entries: []
    });
  }
});