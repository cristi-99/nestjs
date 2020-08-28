import { Controller, Post, Req, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('register')
export class UserController {
  constructor(private userService: UserService) {}

  

  @Get()
  getAllUser() {
    return this.userService.getAllUsers();
  }
}
