Template.nav.helpers({
  isAdmin: function() {
    var user = Meteor.user();
    return user && Roles.userIsInRole(user, 'admin');
  }
});
