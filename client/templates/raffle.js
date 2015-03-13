Template.raffle.helpers({
  ends: function() {
    return moment(this.endDate).fromNow();
  }
});