import GameState from './states/Game';

Meteor.startup(() => {
    const game = new Phaser.Game(360, 640, Phaser.AUTO);
    game.state.add('Game', GameState);
    game.state.start('Game');
});