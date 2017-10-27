import Player from './player/Player';
import CentralBank from './economy/CentralBank';
import Map from './map/Map';

export default class Game {
    public started = false;
    public players: Player[] = [];
    public bank = new CentralBank();
    public map: Map;

    constructor() {
        this.initMap();
        this.addPlayer('ben');
        this.addPlayer('nico');
        this.addPlayer('thomas');
        this.addPlayer('noëll');
    }

    public initMap(height: number = 50, width: number = 50) {
        this.map = new Map(height, width);
    }

    public addPlayer(name: string): Player {
        if (this.started) {
            throw new Error('Game has already started');
        }

        const player = new Player(name);
        this.players.push(player);
        return player;
    }
}