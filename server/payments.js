Stripe = {};

Meteor.startup(function() {
  Stripe = StripeAPI('sk_test_uFT4TTNP6k4NbkpF7WYfqZEJ');
});

Meteor.methods({
  charge: function(req) {
    //console.log(req);

    // { id: 'tok_5srirO4tmkgqnQ',
    //   livemode: false,
    //   created: 1426542141,
    //   used: false,
    //   object: 'token',
    //   type: 'card',
    //   card:
    //    { id: 'card_5sriQhqWDIeEnY',
    //      object: 'card',
    //      last4: '4242',
    //      brand: 'Visa',
    //      funding: 'credit',
    //      exp_month: 11,
    //      exp_year: 2015,
    //      country: 'US',
    //      name: 'tcrosen@gmail.com',
    //      address_line1: null,
    //      address_line2: null,
    //      address_city: null,
    //      address_state: null,
    //      address_zip: null,
    //      address_country: null,
    //      cvc_check: 'pass',
    //      address_line1_check: null,
    //      address_zip_check: null,
    //      dynamic_last4: null },
    //   email: 'tcrosen@gmail.com',
    //   verification_allowed: true,
    //   client_ip: '99.251.2.7' }

    Stripe.charges.create({
      amount: 600,
      currency: 'cad',
      source: req.id
    }, function(err, charge) {
      if (err) {
        // The card has been declined
        console.log('Charge failed');
        console.log(err);
      } else {
        //console.log('Charge complete:');
        //console.log(charge);
      }
    });
  }
});