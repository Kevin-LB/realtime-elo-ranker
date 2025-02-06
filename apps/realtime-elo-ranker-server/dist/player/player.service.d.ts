import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { CreatePlayerDTO } from './DTO/create_player';
export declare class PlayerService {
    private playerRepository;
    constructor(playerRepository: Repository<Player>);
    createPlayer(playerData: CreatePlayerDTO): Promise<Player>;
    getPlayer(id: string): Promise<Player | null>;
    getAllPlayers(): Promise<Player[]>;
}
