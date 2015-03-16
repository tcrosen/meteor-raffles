Template.home.helpers({
  currentRaffle: function() {
    return Raffles.current();
  }
});

Template.home.events({
  'click .btn-buy-ticket': function(e) {
    e.preventDefault();

    StripeCheckout.open({
      key: 'pk_test_KDjAC5QV8GJwlG94xukBiYmd',
      amount: 600,
      name: 'Raffles',
      description: '1 iPad Air Raffle Entry Ticket',
      panelLabel: 'Enter Draw',
      currency: 'cad',
      email: 'tcrosen@gmail.com',
      allowRememberMe: false,
      token: function(res) {
        Meteor.call('charge', res);
      }
    });
  }
})
