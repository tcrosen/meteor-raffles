if (Meteor.isClient) {
  Meteor.subscribe('raffles');
  Meteor.subscribe('current-raffle');
}

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', { path: '/' });
});
