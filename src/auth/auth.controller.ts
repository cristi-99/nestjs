import { Controller, Post, Body, UseGuards, HttpCode, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterDto from './dto/register.dto';
import { LocalAuthGuard } from './local-auth-guard';
import RequestWithUser from './requestWithUser';
import { Response } from 'express';

@Controller('authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    registrationData.role 
    return this.authService.register(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async logIn(@Req() request: RequestWithUser, @Res() response: Response){
      const {user} = request;
      const cookie = this.authService.getCookieWithJwtToken(user.id);
      response.setHeader('Set-Cookie', cookie)
      user.password = undefined;
      return response.send(user);
  }
}
