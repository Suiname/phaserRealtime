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
    }
};

export default Gamestate;