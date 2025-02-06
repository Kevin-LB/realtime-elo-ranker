import { Controller, Get, Sse } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { Observable, interval, map } from 'rxjs';

@Controller('api/ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get()
  async getRanking() {
    return this.rankingService.getRanking();
  }

  @Sse('events')
  rankingEvents(): Observable<MessageEvent> {
    return interval(5000).pipe(
      map(() => new MessageEvent('rankingUpdate', { data: { message: 'Mise à jour du ranking' } }))
    );
  }
}
