import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RankingModule } from './ranking/ranking.module';
import { PlayerModule } from './player/player.module';
import { MatchModule } from './match/match.module';
import { Player } from './player/player.entity';
import { EventService } from './events/event.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqljs',
      autoSave: true,
      location: 'database.sqlite',
      entities: [Player],
      synchronize: true,
    }),
    EventEmitterModule.forRoot(),
    RankingModule,
    PlayerModule,
    MatchModule,
  ],
  providers: [EventService],
})
export class AppModule {}
