Meteor.startup(function() {
  var users = Meteor.users.find().fetch();

  if (users.length <= 2) {
    _.each(users, function(u) {
      Roles.setRolesOnUserObj(u, ['admin']);
    });
  }
});