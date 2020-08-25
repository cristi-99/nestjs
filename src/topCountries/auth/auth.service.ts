import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Users } from '../../schemas/userModel';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { use } from 'passport';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name) private UsersModel: Model<Users>,
    private jwtService: JwtService,
  ) {}

  async validateUser( userData:any) {
    const user = await this.UsersModel.findOne({ username: userData.username });
    
    if (!user) {
      throw new HttpException('User does not exists', HttpStatus.BAD_REQUEST) 
     
    }
    const passwordIsValid = bcrypt.compareSync(userData.password, user.password);
    if (!passwordIsValid) {
      throw new HttpException('Incorrect password', HttpStatus.BAD_REQUEST) 
    }
    return user;
   
  }

  async login (user :Users) {
    const payload = {username:user.username, sub:user._id};
    return  { accesToken: this.jwtService.sign(payload) };
  }
}
