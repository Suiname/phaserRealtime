const Gamestate = {
    init() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVerically = true;
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
            let positions = Positions.find();
            console.log(`number of items: ${positions.count()}`);
            positions.forEach((pos) => {
                let id = pos._id._str ? pos._id._str : pos._id;
                let item = this.items.filter((element) => {
                    return element._id == id;
                });
                item = item.list[0];
                console.log('item: ', item);
                if (!item) {
                    item = this.items.create(pos.x, pos.y, pos.asset);
                    item._id = id;
                } else {
                    item.x = pos.x;
                    item.y = pos.y;
                }
            });
        });
    }
};

export default Gamestate;