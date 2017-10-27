import { Hex, LandType } from './Hex';
import { random } from '../util';

const types: LandType[] = [
    'forest',
    'mud',
    'mountains',
    'grassland', 
    'field',
    'water'
];

export default class Map {
    private tiles: Hex[][];

    constructor(
        public height: number = 50, 
        public width: number = 100
    ) {
        this.generateMap();
    }

    private getRandomHex(): Hex {
        const typeIndex = random(0, 5);
        return new Hex(types[typeIndex]);
    }

    private generateMap() {
        this.tiles = [];

        for (let x = 0; x < this.width; x++) {
            this.tiles[x] = [];

            for (let y = 0; y < this.height; y++) {
                this.tiles[x][y] = this.getRandomHex();
            }
        }

        console.log(this.tiles);
    }
}