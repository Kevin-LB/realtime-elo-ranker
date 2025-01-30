import { Module } from '@nestjs/common';
import { RankingService } from './ranking/ranking.service';
import { RankingController } from './ranking/ranking.controller';
import { PlayerService } from './player/player.service';
import { PlayerController } from './player/player.controller';

@Module({
  providers: [RankingService, PlayerService],
  controllers: [RankingController, PlayerController],
  exports: [RankingService],
})

export class AppModule {}
