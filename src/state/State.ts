import GameAction from './GameAction';

export abstract class State {
    private _state: State;

    public get state() {
        return this._state;
    }

    abstract action(action: GameAction): void;
}

export class GameState extends State {
    public action(action: GameAction) {
        
    }
}