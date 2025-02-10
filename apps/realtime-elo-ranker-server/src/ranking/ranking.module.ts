import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RankingController } from './ranking.controller';
import { RankingService } from './ranking.service';
import { Player } from '../player/player.entity';
import { EventModule } from '../events/event.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
    EventModule,
  ],
  controllers: [RankingController],
  providers: [RankingService],
})
export class RankingModule {}
