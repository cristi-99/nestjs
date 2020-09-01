import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { TopService } from './top.service';
import { JwtAuthGuard } from '../../auth/jwt-auth-guard';
import { Roles } from 'src/roles/roles.decorator';


@Controller('api/top')
export class TopController {
  constructor(private topService: TopService) {}
  private readonly logger = new Logger();
  @UseGuards(JwtAuthGuard)
  @Get()
  @Roles('Administrator')
  public async getTop() {
   await this.topService.getTop();
  }
}
