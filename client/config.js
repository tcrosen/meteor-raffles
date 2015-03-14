Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes'],
    github: ['user'],
    twitter: []
  },
  requestOfflineToken: {
    google: true
  },
  passwordSignupFields: 'USERNAME_AND_EMAIL',
  extraSignupFields: [{
    fieldName: 'terms',
    fieldLabel: 'I accept the <a href="#">Terms and Conditions</a>',
    inputType: 'checkbox',
    visible: true,
    saveToProfile: true
  }]
});