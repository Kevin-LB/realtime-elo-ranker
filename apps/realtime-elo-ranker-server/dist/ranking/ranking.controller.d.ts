import { Observable } from 'rxjs';
import { EventService } from '../events/event.service';
import { PlayerService } from '../player/player.service';
export declare class RankingController {
    private eventService;
    private readonly playerService;
    constructor(eventService: EventService, playerService: PlayerService);
    getRanking(): Promise<import("../player/player.entity").Player[]>;
    sse(): Observable<MessageEvent>;
}
