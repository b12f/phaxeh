import * as uuid from 'uuid';

export type HookCallback = () => boolean;
export type Hook =  'beforeLocationChoose' | 
                    'beforePlayerLocationChoose' |
                    'afterPlayerLocationChoose' |
                    'afterLocationChoose' |
                    'beforeTurnStart' |
                    'turnStart' |
                    'beforeResourceAllocation' |
                    'afterResourceAllocation' |
                    'beforePlayerActions' |
                    'beforeTradePhase' |
                    'afterTradePhase' |
                    'beforeBuildPhase' |
                    'afterBuildPhase' |
                    'beforeWarPhase' |
                    'afterWarPhase' |
                    'afterPlayerActions' |
                    'turnEnd' |
                    'gameEnd';

interface HookRegistration {
    callback: HookCallback;
    hook: Hook;
    id: string;
}

export class HookCallbackFailure extends Error {
    constructor() {
        super();
    }
}

export class HookService {
    private registered: HookRegistration[] = [];

    public register(hook: Hook, callback: HookCallback): string {
        const id = uuid.v4();
        this.registered.push({
            callback,
            hook,
            id
        });

        return id;
    }

    public unregister(id: string) {
        let index: number = -1;

        for (let i = 0; i < this.registered.length; i++) {
            if (this.registered[i].id === id) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            this.registered.splice(index, 1);
        }
    }

    public run(hook: Hook) {
        const toRemove: string[] = [];

        for (let i = 0; i < this.registered.length; i++) {
            if (this.registered[i].hook === hook) {
                try {
                    const res = this.registered[i].callback();

                    if (res) {
                        toRemove.push(this.registered[i].id);
                    }
                }
                catch(err) {
                    throw new HookCallbackFailure();
                }
            }
        }
    }
}