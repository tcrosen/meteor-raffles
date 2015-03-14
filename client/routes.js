Router.configure({
  layoutTemplate: 'layout'
});

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
    data: function() {
      return Raffles.findOne(this.params._id)
    }
  });

  this.route('admin', {
    path: '/admin',
    onBeforeAction: function() {
      if (!Meteor.user()) {
        this.redirect('/');
      } else {
        this.next();
      }
    }
  });

  //this.route('enterRaffle', { path: '/raffles/:id/enter' });
});