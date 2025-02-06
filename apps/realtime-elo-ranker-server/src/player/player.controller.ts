import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDTO } from './DTO/create_player';

@Controller('api/player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async createPlayer(@Body() playerData: CreatePlayerDTO) {
    return this.playerService.createPlayer(playerData);
  }

  @Get(':id')
  async getPlayer(@Param('id') id: string) {
    return this.playerService.getPlayer(id);
  }

  @Get()
  async getAllPlayers() {
    return this.playerService.getAllPlayers();
  }
}
