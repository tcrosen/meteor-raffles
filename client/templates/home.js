Template.home.helpers({
  currentRaffle: function() {
    return Raffles.current();
  },

  raffles: function() {
    return Raffles.find({}, { sort: { endDate: -1 }, limit: 3 })
  }
});
