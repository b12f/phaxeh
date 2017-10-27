interface HookCallback {
    callback: Function;
    hook: string;
    id: string;
}

export default class HookService {
    private registered = [];
}