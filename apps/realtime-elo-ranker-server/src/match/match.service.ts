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

  async processMatchResult(matchData: PublishMatchDTO): Promise<{ message: string }> {
    const player1 = await this.playerRepository.findOne({ where: { id: matchData.player1Id } });
    const player2 = await this.playerRepository.findOne({ where: { id: matchData.player2Id } });

    if (!player1 || !player2) {
      throw new Error("Un des joueurs n'existe pas.");
    }

    // Déterminer le gagnant et le perdant
    let winner: Player, loser: Player;
    if (matchData.result === 'WINNER_PLAYER1') {
      winner = player1;
      loser = player2;
    } else {
      winner = player2;
      loser = player1;
    }

    // Mise à jour des statistiques et des points
    winner.wins += 1;
    loser.losses += 1;
    winner.rank += 100;
    loser.rank -= 100;

    // Sauvegarde des mises à jour
    await this.playerRepository.save([winner, loser]);

    return { message: `Match enregistré. ${winner.id} gagne +100 points, ${loser.id} perd -100 points.` };
  }
}
