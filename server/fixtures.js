Meteor.startup(() => {
  const num = Positions.find().count();
  if (num === 0) {
    Positions.insert({ x: 100, y: 200, asset: 'apple' });
    Positions.insert({ x: 10, y: 200, asset: 'candy' });
    Positions.insert({ x: 30, y: 50, asset: 'duck' });
    Positions.insert({ x: 50, y: 140, asset: 'apple' });
    Positions.insert({ x: 80, y: 240, asset: 'apple' });
    Positions.insert({ x: 47, y: 240, asset: 'candy' });
    Positions.insert({ x: 32, y: 40, asset: 'duck' });
    Positions.insert({ x: 69, y: 140, asset: 'apple' });
  }
});
