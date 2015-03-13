if (Meteor.isClient) {
  Meteor.subscribe('raffles');
}

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', { path: '/' });
});
