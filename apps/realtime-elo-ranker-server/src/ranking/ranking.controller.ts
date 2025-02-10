import { Controller, Get, Sse } from '@nestjs/common';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventService } from '../events/event.service';
import { PlayerService } from '../player/player.service';


@Controller('api/ranking')
export class RankingController {
  constructor(
    private eventService: EventService,
    private readonly playerService: PlayerService,
  ) {}

  @Get()
  async getRanking() {
    return this.playerService.getAllPlayers(); // Retourne tous les joueurs avec leur classement
  }

  @Sse('/events/')
  sse(): Observable<MessageEvent> {
    return fromEvent(this.eventService, 'playerRankingUpdate').pipe(
      map((data) => new MessageEvent('playerRankingUpdate', { data }))
    );
  }
}
