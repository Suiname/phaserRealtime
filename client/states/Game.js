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

        let positions;
        Tracker.autorun(() => {
            positions = Positions.find();
            console.log(`number of items: ${positions.count()}`);
            positions.forEach((pos) => {
                this.items.create(pos.x, pos.y, pos.asset);
            });
        });
    }
};

export default Gamestate;