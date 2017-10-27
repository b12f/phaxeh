import Game from './Game';


async function main() {
    const game = new Game();
    game.addPlayer('ben');
    game.addPlayer('nico');
    game.addPlayer('thomas');
    game.addPlayer('noëll');
    await game.start();
}

main();
