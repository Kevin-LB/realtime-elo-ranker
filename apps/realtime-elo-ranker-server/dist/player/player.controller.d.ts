import { PlayerService } from './player.service';
import { CreatePlayerDTO } from './DTO/create_player';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    createPlayer(playerData: CreatePlayerDTO): Promise<import("./player.entity").Player>;
    getPlayer(id: string): Promise<import("./player.entity").Player | null>;
    getAllPlayers(): Promise<import("./player.entity").Player[]>;
}
