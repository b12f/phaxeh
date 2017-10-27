export abstract class CornerPlacable {
    // Not sure yet. But you need at least three values and not more
    public x: number;
    public y: number;
    public z: number;
}

export abstract class FieldPlacable {
    // The field coordinates
    public x: number;
    public y: number;
}

export abstract class SidePlacable {
    // The side fields
    public a: FieldPlacable;
    public b: FieldPlacable;
}