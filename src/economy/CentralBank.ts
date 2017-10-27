import { Inventory } from '../player/Inventory';
import Buyable from './Buyable';
import { cost } from './cost';

export default class CentralBank {
    public buy(item: Buyable, inventory: Inventory) {
        if (inventory.canBuy(item)) {
            inventory.removeFood(item.cost.food);
            inventory.removeOre(item.cost.ore);
            inventory.removeStone(item.cost.stone);
            inventory.removeTextile(item.cost.textile);
            inventory.removeWood(item.cost.wood);

            return true;
        }

        return false;
    }
}