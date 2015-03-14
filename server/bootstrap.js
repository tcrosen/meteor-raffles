var today = moment().hours(0).minutes(0).seconds(0);

Meteor.startup(function() {
  if (Raffles.find().count() === 0) {
    Raffles.insert({
      title: 'GoPro',
      mainImage: 'images/gopro.jpg',
      startDate: today.clone().subtract(1, 'days').toDate(),
      endDate: today.toDate(),
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
      endDate: today.clone().add(1, 'days').toDate(),
      retailPrice: 500.00,
      entryPrice: 5.00,
      maxEntries: 100,
      isActive: true,
      entries: [{ userId: 100 }, { userId: 200 }, { userId: 300 }]
    });

    Raffles.insert({
      title: 'Michael Kors Purse',
      mainImage: 'images/purse.jpeg',
      startDate: today.clone().add(1, 'days').toDate(),
      endDate: today.clone().add(2, 'days').toDate(),
      retailPrice: 900.00,
      entryPrice: 10.00,
      maxEntries: 100,
      isActive: false,
      entries: []
    });
  }
});