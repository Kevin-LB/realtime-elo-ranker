import { Controller, Post, Body } from '@nestjs/common';
import { MatchService } from './match.service';
import { PublishMatchDTO } from './DTO/publish_match';

@Controller('api/match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  async publishMatch(@Body() matchData: PublishMatchDTO) {
    return this.matchService.processMatchResult(matchData);
  }
}
