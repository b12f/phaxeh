import * as uuid from 'uuid';
export type LandType = 'forest' | 'mud' | 'mountains' | 'grassland' | 'field' | 'water';

export class Hex {
    public id: string;
    constructor(
        public type: LandType = 'water'
    ) {
        this.id = uuid.v4();
    }
}