Template.raffle.helpers({
  ticketsRemaining: function() {
    var numEntries = this.entries && this.entries.length;
    return this.maxEntries - numEntries;
  },

  ends: function() {
    return moment(this.endDate).fromNow(true);
  }
});

// Template.raffle.events({
//   'click .btn-buy-ticket': function (e, template) {
//     console.log(template);
//   }
// });