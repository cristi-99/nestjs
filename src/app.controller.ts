import { Controller, Request, Post, UseGuards, Get, Res} from '@nestjs/common';
import { LocalAuthGuard } from './topCountries/auth/local-auth-guard';
import { AuthService } from './topCountries/auth/auth.service';
import { ConfigService } from '@nestjs/config';




@Controller()
export class AppController {
  constructor(private authService: AuthService,
    private configService: ConfigService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    
     return this.authService.login(req.user)
     
  }
}
