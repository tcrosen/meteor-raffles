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
      isActive: false
    });

    Raffles.insert({
      title: 'iPad Air',
      mainImage: 'images/ipad.jpeg',
      startDate: today.toDate(),
      endDate: tomorrow.toDate(),
      isActive: true
    });

    Raffles.insert({
      title: 'Michael Kors Purse',
      mainImage: 'images/purse.jpeg',
      startDate: tomorrow.toDate(),
      endDate: tomorrow.toDate(),
      isActive: false
    });

    console.log(Raffles.find().fetch());
  }
});