Router.configure({
  layoutTemplate: 'layout'
});

var checkAdmin = function() {
  if (!Meteor.user()) {
    this.redirect('/');
  } else {
    this.next();
  }
};

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('raffles', {
    path: '/raffles',
    template: 'raffleList',
    data: function() {
      return {
        raffles: Raffles.find()
      };
    }
  });

  this.route('raffleCreate', {
    path: '/raffles/new',
    template: 'raffleCreate',
    onBeforeAction: checkAdmin
  });

  this.route('raffle', {
    path: '/raffles/:_id',
    template: 'raffleView',
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

  this.route('admin', {
    path: '/admin',
    onBeforeAction: checkAdmin
  });

  //this.route('enterRaffle', { path: '/raffles/:id/enter' });
});