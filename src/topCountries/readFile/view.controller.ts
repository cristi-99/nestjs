import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { TopService } from './top.service';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('api/view')
export class ViewController {
  constructor(private topService: TopService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  public async renderView(@Res() res: Response) {
    
    let top = await this.topService.getTop();
    res.render('main.hbs', {
      top1: top,
    });
  }
}
