var USER_ROLES = {
  ADMIN: 'admin'
};

// Prevent guests from creating user accounts
// Accounts.validateNewUser(function(user) {
//   var loggedInUser = Meteor.user();

//   if (Roles.userIsInRole(loggedInUser, [USER_ROLES.ADMIN])) {
//     return true;
//   }

//   throw new Meteor.Error(403, 'Not authorized to create new users');
// });

Accounts.onCreateUser(function(options, user) {

  if (options.profile) {
    user.profile = options.profile;
  }

  // If this is the first user going into the database, make them an admin
  if (Meteor.users.find().count() === 0) {
    Roles.setRolesOnUserObj(user, [USER_ROLES.ADMIN]);
  }

  return user;
});