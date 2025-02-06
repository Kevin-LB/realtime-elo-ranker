import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PublishMatchDTO } from './DTO/publish_match';
import { Player } from '../player/player.entity';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  async processMatchResult(matchData: PublishMatchDTO): Promise<string> {
    const player1 = await this.playerRepository.findOne({ where: { id: matchData.player1Id } });
    const player2 = await this.playerRepository.findOne({ where: { id: matchData.player2Id } });

    if (!player1 || !player2) {
      throw new Error("Un des joueurs n'existe pas.");
    }

    // Mise à jour des statistiques des joueurs
    if (matchData.result === 'WINNER_PLAYER1') {
      player1.wins += 1;
      player2.losses += 1;
    } else {
      player2.wins += 1;
      player1.losses += 1;
    }

    await this.playerRepository.save([player1, player2]);

    return `Match enregistré : ${matchData.player1Id} vs ${matchData.player2Id}, vainqueur: ${matchData.result}`;
  }
}
