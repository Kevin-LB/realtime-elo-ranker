import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RankingModule } from './ranking/ranking.module';
import { PlayerModule } from './player/player.module';
import { MatchModule } from './match/match.module';
import { Player } from './player/player.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqljs',
      autoSave: true, 
      location: 'database.sqlite', 
      entities: [Player], 
      synchronize: true, 
    }),
    RankingModule,
    PlayerModule,
    MatchModule,
  ],
})
export class AppModule {}
