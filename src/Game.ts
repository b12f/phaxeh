import Player from './player/Player';
import CentralBank from './economy/CentralBank';
import Map from './map/Map';
import { CLI } from './cli/CLI';
import { GameState } from './state/State';

export default class Game {
    public running = false;
    public players: Player[] = [];
    public bank = new CentralBank();
    public map: Map;
    private cli: CLI = new CLI();
    private state: GameState = new GameState();

    constructor() {
        this.init();
    }

    public init() {
        this.initMap();
    }

    private initMap(height: number = 50, width: number = 50) {
        this.map = new Map(height, width);
    }

    public addPlayer(name: string): Player {
        const player = new Player(name);
        this.players.push(player);
        return player;
    }

    public async start() {
        for (;this.running;) {
            const action = await this.cli.prompt();

            this.state.action(action);
        }
    }
}