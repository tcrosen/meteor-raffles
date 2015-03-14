Template.nav.helpers({
  isAdmin: function() {
    return Meteor.user() && Meteor.user().admin;
  }
});
