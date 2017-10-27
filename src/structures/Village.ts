import Buyable from '../economy/Buyable';
import { CornerPlacable } from '../map/Placable';

export default class Village extends CornerPlacable implements Buyable {
    public cost: {
        wood: 200;
        stone: 400;
        food: 200;
        ore: 200;
        textile: 100;
    }
}