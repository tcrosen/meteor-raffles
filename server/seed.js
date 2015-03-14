var today = moment().hours(0).minutes(0).seconds(0);

var setDaysFromToday = function(days) {
  if (days < 0) {
    return today.clone().subtract(days, 'days').toDate();
  } else {
    return today.clone().add(days, 'days').toDate();
  }
}

var getMockEntries = function(n) {
  var entries = [];

  for (var i = 0; i < n; i++) {
    entries.push({ userId: 100 + i });
  }

  return entries;
}

var rafflesSeed = [{
  title: 'GoPro',
  mainImage: '/images/gopro.jpg',
  startDate: setDaysFromToday(-1),
  endDate: setDaysFromToday(0),
  retailPrice: 300,
  entryPrice: 3,
  maxEntries: 100,
  isActive: false,
  entries: getMockEntries(100)
}, {
  title: 'iPad Air',
  mainImage: '/images/ipad.jpeg',
  startDate: setDaysFromToday(0),
  endDate: setDaysFromToday(1),
  retailPrice: 500.00,
  entryPrice: 5.00,
  maxEntries: 100,
  isActive: true,
  entries: getMockEntries(24)
}, {
  title: 'Michael Kors Purse',
  mainImage: '/images/purse.jpeg',
  startDate: setDaysFromToday(1),
  endDate: setDaysFromToday(2),
  retailPrice: 900.00,
  entryPrice: 10.00,
  maxEntries: 100,
  isActive: false,
  entries: getMockEntries(0)
}, {
  title: 'Dyson Animal Vaccuum',
  mainImage: '/images/dyson.jpg',
  startDate: setDaysFromToday(2),
  endDate: setDaysFromToday(3),
  retailPrice: 700,
  entryPrice: 10,
  maxEntries: 70,
  isActive: false,
  entries: getMockEntries(0)
}, {
  title: 'Beats By Dre Headphones',
  mainImage: '/images/beatsbydre.jpg',
  startDate: setDaysFromToday(3),
  endDate: setDaysFromToday(4),
  retailPrice: 400,
  entryPrice: 5,
  maxEntries: 80,
  isActive: false,
  entries: getMockEntries(0)
}];

Meteor.methods({
  seedRaffles: function () {

    if (!Helpers.isAdmin) {
      throw new Meteor.Error('Unauthorized', 'You can\'t do that');
    }

    Raffles.remove({}, function() {
      _.each(rafflesSeed, function(raffle) {
        Raffles.insert(raffle);
      });
    });

    return rafflesSeed;
  }
});