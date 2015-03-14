Template.tools.helpers({});

Template.tools.events({
  'click .btn-seed-raffles': function(e) {
    e.preventDefault();

    $('#adminConfirmModal').modal('show');

    $('#adminConfirmYes').click(function() {
      $('#adminConfirmModal').modal('hide');

      Meteor.call('seedRaffles');
      $('.admin-message-body').text('Raffles seeded successfully!');
      $('.admin-message').show();
    });
  }
});