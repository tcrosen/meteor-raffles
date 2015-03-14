
/**
 * Format a date with moment.js
 *
 *  Defaults:
 *  {{ prettyDate myDate }}
 *
 *  Custom format:
 *  {{ prettyDate date=myDate format='H:mm:ss' }}
 */

UI.registerHelper('prettyDate', function(context) {
  var dateString   = context;
      formatString = 'MM/DD/YYYY HH:mm';

  if (dateString) {
    if (context.hash) {
      if (context.hash.date) {
        dateString = context.hash.date;
      }

      if (context.hash.format) {
        formatString = context.hash.format;
      }
    }

    return moment(dateString).format(formatString);
  }
});