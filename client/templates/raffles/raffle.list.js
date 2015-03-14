Template.raffleList.helpers({
  isAdmin: function() {
    return Helpers.isAdmin();
  },

  getContextClass: function(raffle) {
    return raffle.isActive ? 'warning' : '';
  }
});