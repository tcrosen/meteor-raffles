UI.registerHelper('currency', function(context) {
  if (context) {
    return accounting.formatMoney(context, {
      precision: 0
    });
  }
});