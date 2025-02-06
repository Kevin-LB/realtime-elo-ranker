import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { CreatePlayerDTO } from './DTO/create_player';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  async createPlayer(playerData: CreatePlayerDTO): Promise<Player> {
    const player = this.playerRepository.create(playerData);
    return this.playerRepository.save(player);
  }

  async getPlayer(id: string): Promise<Player | null> {
    return this.playerRepository.findOne({ where: { id } });
  }

  async getAllPlayers(): Promise<Player[]> {
    return this.playerRepository.find();
  }
}
