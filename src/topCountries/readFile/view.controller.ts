import { Controller, Get, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { TopService } from './top.service';

@Controller('api/view')
export class ViewController {
  constructor(private topService: TopService) {}
  @Get()
  public async renderView(@Res() res: Response) {
    
    let top = await this.topService.getTop();
    res.render('main.hbs', {
      top1: top,
    });
  }
}
