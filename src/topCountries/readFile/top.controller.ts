import { Controller, Get, Logger } from '@nestjs/common';
import { TopService } from './top.service';

@Controller('api/top')
export class TopController {
  constructor(private topService: TopService) {}
  private readonly logger = new Logger();
  @Get()
  public async getTop() {
   await this.topService.getTop();
  }
}
