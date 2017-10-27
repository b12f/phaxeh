import Buyable from '../economy/Buyable';

export class InsufficientFunds extends Error {
    constructor() {
        super();
    }
}

export class Inventory {
    constructor(
        private _wood: number = 0,
        private _stone: number = 0,
        private _ore: number = 0,
        private _textile: number = 0,
        private _food: number = 0,
    ) {}

    public canBuy(item: Buyable) {
        if (
            this._wood < item.cost.wood ||
            this._stone < item.cost.stone ||
            this._food < item.cost.food ||
            this._ore < item.cost.ore ||
            this._textile < item.cost.textile
        ) {
            return false;
        }

        return  true;
    }

    public get wood(): number {
        return this._wood;
    }
    public addWood(wood: number) {
        this._wood += wood;
    }
    public removeWood(wood: number) {
        if (this._wood < wood) {
            throw new InsufficientFunds();
        }

        this._wood -= wood;
    }

    public get stone(): number {
        return this._stone;
    }
    public addStone(stone: number) {
        this._stone += stone;
    }
    public removeStone(stone: number) {
        if (this._stone < stone) {
            throw new InsufficientFunds();
        }

        this._stone -= stone;
    }

    public get ore(): number {
        return this._ore;
    }
    public addOre(ore: number) {
        this._ore += ore;
    }
    public removeOre(ore: number) {
        if (this._ore < ore) {
            throw new InsufficientFunds();
        }

        this._ore -= ore;
    }

    public get textile(): number {
        return this._textile;
    }
    public addTextile(textile: number) {
        this._textile += textile;
    }
    public removeTextile(textile: number) {
        if (this._textile < textile) {
            throw new InsufficientFunds();
        }

        this._textile -= textile;
    }

    public get food(): number {
        return this._food;
    }
    public addFood(food: number) {
        this._food += food;
    }
    public removeFood(food: number) {
        if (this._food < food) {
            throw new InsufficientFunds();
        }

        this._food -= food;
    }
}