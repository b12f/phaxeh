import { Inventory } from './Inventory';
import * as uuid from 'uuid';

export default class Player {
    public id: string = uuid.v4();
    public inventory: Inventory = new Inventory(100, 100, 100, 100, 100);

    constructor(
        public name: string
    ) {
        console.log(this.name, this.id);
    }
}