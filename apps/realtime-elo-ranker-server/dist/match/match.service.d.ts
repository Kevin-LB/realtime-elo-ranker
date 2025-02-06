import { Repository } from 'typeorm';
import { PublishMatchDTO } from './DTO/publish_match';
import { Player } from '../player/player.entity';
export declare class MatchService {
    private playerRepository;
    constructor(playerRepository: Repository<Player>);
    processMatchResult(matchData: PublishMatchDTO): Promise<string>;
}
