import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { Player } from '../player/player.entity';
import { EventModule } from '../events/event.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
    EventModule,
  ],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
