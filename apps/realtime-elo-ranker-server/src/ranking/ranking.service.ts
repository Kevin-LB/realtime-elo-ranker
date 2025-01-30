import { Injectable } from '@nestjs/common';

@Injectable()
export class RankingService {
  private ranking: Map<string, number> = new Map(); // Stocke les scores des joueurs

  constructor() {}

  // Ajouter ou mettre à jour un joueur dans le classement
  updateRanking(playerId: string, score: number) {
    this.ranking.set(playerId, score);
  }

  // Récupérer le score d'un joueur
  getPlayerScore(playerId: string): number | undefined {
    return this.ranking.get(playerId);
  }

  // Obtenir tout le classement
  getRanking(): { playerId: string; score: number }[] {
    return Array.from(this.ranking.entries()).map(([playerId, score]) => ({ playerId, score }));
  }
}