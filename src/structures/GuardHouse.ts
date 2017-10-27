import Buyable from '../economy/Buyable';

export default class GuardHouse implements Buyable {
    public cost: {
        wood: 200;
        stone: 400;
        food: 200;
        ore: 200;
        textile: 100;
    }
}