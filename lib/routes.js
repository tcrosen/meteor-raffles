if (Meteor.isClient) {
  Meteor.subscribe('raffles');
  Meteor.subscribe('current-raffle');
}

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('raffle', { path: '/raffles/:id' });
  this.route('enter-raffle', { path: '/raffles/:id/enter' });
});
