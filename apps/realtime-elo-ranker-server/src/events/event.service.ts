import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';

@Injectable()
export class EventService {
  constructor(private eventEmitter: EventEmitter2) {}

  // Émettre un événement
  emitEvent(eventName: string, payload: any) {
    this.eventEmitter.emit(eventName, payload);
  }

  // Écouter un événement
  onEvent(eventName: string, listener: (payload: any) => void) {
    this.eventEmitter.on(eventName, listener);
  }

  // Supprimer un écouteur spécifique
  removeListener(eventName: string, listener: (payload: any) => void) {
    this.eventEmitter.removeListener(eventName, listener);
  }

  // Supprimer tous les écouteurs d'un événement
  removeAllListeners(eventName: string) {
    this.eventEmitter.removeAllListeners(eventName);
  }
}
