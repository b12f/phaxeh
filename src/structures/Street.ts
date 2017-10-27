import Buyable from '../economy/Buyable';
import { SidePlacable } from '../map/Placable';

export default class Street extends SidePlacable implements Buyable {
    public cost: {
        wood: 200;
        stone: 400;
        food: 200;
        ore: 200;
        textile: 100;
    }
}