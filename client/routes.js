Router.configure({
  layoutTemplate: 'layout'
});

// Make sure the user is logged in
var checkLoggedIn = function() {
  if (!Meteor.user()) {
    this.redirect('/');
  } else {
    this.next();
  }
};

// Make sure the user is logged in AND an admin
var checkAdmin = function() {
  if (!Helpers.isAdmin) {
    this.redirect('/');
  } else {
    this.next();
  }
};

Router.map(function() {
  this.route('landing', {
    path: '/'
  });

  this.route('home', {
    path: '/home'
  });

  this.route('raffleList', {
    path: '/raffles',
    template: 'raffleList',
    data: function() {
      return {
        raffles: Raffles.find({}, { sort: { endDate: 1 }})
      };
    }
  });

  this.route('raffleCreate', {
    path: '/raffles/new',
    template: 'raffleCreate',
    onBeforeAction: checkAdmin
  });

  this.route('raffleView', {
    path: '/raffles/:_id',
    template: 'raffleView',
    data: function() {
      return Raffles.findOne(this.params._id)
    }
  });

  this.route('raffleEnter', {
    path: '/raffles/:_id/enter',
    template: 'raffleEnter',
    data: function() {
      return Raffles.findOne(this.params._id)
    }
  });

  this.route('raffleEdit', {
    path: '/raffles/:_id/edit',
    template: 'raffleEdit',
    onBeforeAction: checkAdmin,
    data: function() {
      return Raffles.findOne(this.params._id)
    }
  });

  this.route('tools', {
    path: '/tools',
    onBeforeAction: checkAdmin
  });
});