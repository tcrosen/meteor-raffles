Raffles = new Mongo.Collection('raffles');

Raffles.current = function() {
  return Raffles.findOne({ isActive: true });
};