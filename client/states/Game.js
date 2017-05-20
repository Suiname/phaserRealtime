const Gamestate = {
  init() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVerically = true;
    this.MOVEMENT_LIMIT = 5;
  },
  preload() {
    this.load.image('backyard', 'images/backyard.png');
    this.load.image('candy', 'images/candy.png');
    this.load.image('apple', 'images/apple.png');
    this.load.image('duck', 'images/duck.png');
  },
  create() {
    this.background = this.add.sprite(0, 0, 'backyard');
    this.items = this.add.group();

    Tracker.autorun(() => {
      const positions = Positions.find();
      positions.forEach((pos) => {
        const id = pos._id._str ? pos._id._str : pos._id;
        let item = this.items.filter(element => element._id === id);
        item = item.list[0];
        if (!item) {
          item = this.items.create(pos.x, pos.y, pos.asset);
          item._id = id;
          item._idOriginal = pos._id;
          item.inputEnabled = true;
          item.input.enableDrag();
        } else {
          item.x = pos.x;
          item.y = pos.y;
        }
      });
    });
  },
  update() {
    this.items.forEach((item) => {
      if (!item.previousPosition) {
        item.previousPosition = { x: item.x, y: item.y };
      } else if (item.input.isDragged &&
      (Phaser.Point.distance(item.position, item.previousPosition) > this.MOVEMENT_LIMIT)) {
        Positions.update(item._idOriginal, { $set: { x: item.x, y: item.y } });
      }
    });
  },
};

export default Gamestate;
