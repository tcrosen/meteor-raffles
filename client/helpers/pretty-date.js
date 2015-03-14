UI.registerHelper('prettyDate', function(context) {
  if (context) {
    return moment(context).format('MM/DD/YYYY');
  }
});