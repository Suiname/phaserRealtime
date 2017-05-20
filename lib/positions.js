Positions = new Mongo.Collection('positions');

Positions.allow({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  },
});
