export declare class RankingService {
    private ranking;
    constructor();
    updateRanking(playerId: string, score: number): void;
    getPlayerScore(playerId: string): number | undefined;
    getRanking(): {
        playerId: string;
        score: number;
    }[];
}
