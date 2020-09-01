import { Controller, Get, Res, UseGuards, Request } from '@nestjs/common';
import { Response} from 'express';
import { TopService } from './top.service';
import { JwtAuthGuard } from '../../auth/jwt-auth-guard';
import { Role } from 'src/roles/role.entity';
import { Roles } from 'src/roles/roles.decorator';

@Controller('api/view')
export class ViewController {
  constructor(private topService: TopService) {}
  //@UseGuards(JwtAuthGuard)
  @Get()
  
  public async renderView(@Request() req, @Res() res: Response) {
    let top = await this.topService.getTop();
    res.render('main.hbs', {
      top1: top,
    });
  }
}
