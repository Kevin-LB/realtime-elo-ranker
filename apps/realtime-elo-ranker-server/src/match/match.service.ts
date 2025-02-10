import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PublishMatchDTO } from './DTO/publish_match';
import { Player } from '../player/player.entity';
import { EventService } from '../events/event.service'; // Import du service d'événements

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
    private eventService: EventService, // Injection du EventService
  ) {}

  async processMatchResult(matchData: PublishMatchDTO): Promise<{ message: string }> {
    const player1 = await this.playerRepository.findOne({ where: { id: matchData.player1Id } });
    const player2 = await this.playerRepository.findOne({ where: { id: matchData.player2Id } });

    if (!player1 || !player2) {
      throw new Error("Un des joueurs n'existe pas.");
    }

    let winner: Player, loser: Player;
    if (matchData.result === 'WINNER_PLAYER1') {
      winner = player1;
      loser = player2;
    } else {
      winner = player2;
      loser = player1;
    }

    winner.wins += 1;
    loser.losses += 1;
    winner.rank += 100;
    loser.rank -= 100;

    await this.playerRepository.save([winner, loser]);

    // Émettre un événement pour notifier du changement de ranking
    this.eventService.emitEvent('rankingUpdate', { winner, loser });

    return { message: `Match enregistré. ${winner.id} gagne +100 points, ${loser.id} perd -100 points.` };
  }
}
