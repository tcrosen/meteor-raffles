Raffles = new Mongo.Collection('raffles');

var raffleSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
  },
  mainImage: {
    type: String,
    label: 'Image',
  },
  startDate: {
    type: Date,
    label: 'Start Date',
    defaultValue: new Date
  },
  endDate: {
    type: Date,
    label: 'End Date',
    defaultValue: new Date
  },
  retailPrice: {
    type: Number,
    label: 'Retail Price',
    min: 0,
    defaultValue: 100
  },
  entryPrice: {
    type: Number,
    label: 'Entry Price',
    min: 0,
    defaultValue: 1
  },
  maxEntries: {
    type: Number,
    label: 'Max Entries',
    defaultValue: 100
  },
  isActive: {
    type: Boolean,
    label: 'Active',
    defaultValue: false
  },
  entries: {
    type: [Object],
    optional: true,
    blackbox: true
  },
  ticketsRemaining: {
    type: Number,
    optional: true,
    autoValue: function() {
      var entries = this.field('entries'),
          maxEntries = this.field('maxEntries').value,
          numEntries = 0;

      if (entries.isSet && entries.value.length) {
        numEntries = entries.value.length;
      }

      return maxEntries - numEntries;
    }
  },
  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  },
  // Force value to be current date (on server) upon update
  // and don't allow it to be set upon insert.
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
});

Raffles.attachSchema(raffleSchema);

Raffles.current = function() {
  return Raffles.findOne({ isActive: true });
};
