UI.registerHelper('dateFromNow', function(context) {
  if (context) {
    return moment(context).fromNow(true);
  }
});