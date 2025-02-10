import { Repository } from 'typeorm';
import { PublishMatchDTO } from './DTO/publish_match';
import { Player } from '../player/player.entity';
import { EventService } from '../events/event.service';
export declare class MatchService {
    private playerRepository;
    private eventService;
    constructor(playerRepository: Repository<Player>, eventService: EventService);
    processMatchResult(matchData: PublishMatchDTO): Promise<{
        message: string;
    }>;
}
