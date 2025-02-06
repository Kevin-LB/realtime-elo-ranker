import { MatchService } from './match.service';
import { PublishMatchDTO } from './DTO/publish_match';
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    publishMatch(matchData: PublishMatchDTO): Promise<string>;
}
