import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {
  private players = new Map<string, any>();

  getPlayerById(id: string) {
    return this.players.get(id) || { error: 'Player not found' };
  }

  createPlayer(playerData: any) {
    const id = `${Date.now()}`;
    this.players.set(id, { id, ...playerData });
    return { id, ...playerData };
  }
}
