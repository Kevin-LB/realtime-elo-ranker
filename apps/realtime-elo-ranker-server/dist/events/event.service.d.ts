import { EventEmitter2 } from 'eventemitter2';
export declare class EventService {
    private eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    emitEvent(eventName: string, payload: any): void;
    onEvent(eventName: string, listener: (payload: any) => void): void;
    removeListener(eventName: string, listener: (payload: any) => void): void;
    removeAllListeners(eventName: string): void;
}
