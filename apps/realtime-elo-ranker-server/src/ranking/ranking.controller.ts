import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RankingService } from './ranking.service';

@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Post('update')
  updateRanking(@Body() body: { playerId: string; score: number }) {
    this.rankingService.updateRanking(body.playerId, body.score);
    return { message: 'Classement mis à jour', ranking: this.rankingService.getRanking() };
  }

  @Get(':playerId')
  getPlayerScore(@Param('playerId') playerId: string) {
    return { playerId, score: this.rankingService.getPlayerScore(playerId) };
  }

  @Get()
  getRanking() {
    return this.rankingService.getRanking();
  }
}