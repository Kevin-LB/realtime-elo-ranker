import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get(':id')
  getPlayer(@Param('id') id: string) {
    return this.playerService.getPlayerById(id);
  }

  @Post()
  createPlayer(@Body() playerData: any) {
    return this.playerService.createPlayer(playerData);
  }
}
