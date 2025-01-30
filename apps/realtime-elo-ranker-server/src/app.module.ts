import { Module } from '@nestjs/common';
import { RankingService } from './ranking/ranking.service';
import { RankingController } from './ranking/ranking.controller';

@Module({
  providers: [RankingService],
  controllers: [RankingController],
  exports: [RankingService],
})
export class AppModule {}