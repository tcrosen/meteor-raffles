Template.raffle.helpers({
  ticketsRemaining: function() {
    return this.maxEntries - this.entries.length;
  },

  ends: function() {
    return moment(this.endDate).fromNow(true);
  }
});