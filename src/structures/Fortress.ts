import Buyable from '../economy/Buyable';
import { FieldPlacable } from '../map/Placable';

export default class Fortress extends FieldPlacable implements Buyable {
    public cost: {
        wood: 200;
        stone: 400;
        food: 200;
        ore: 200;
        textile: 100;
    }
}