import { RankingService } from './ranking.service';
export declare class RankingController {
    private readonly rankingService;
    constructor(rankingService: RankingService);
    updateRanking(body: {
        playerId: string;
        score: number;
    }): {
        message: string;
        ranking: {
            playerId: string;
            score: number;
        }[];
    };
    getPlayerScore(playerId: string): {
        playerId: string;
        score: number | undefined;
    };
    getRanking(): {
        playerId: string;
        score: number;
    }[];
}
