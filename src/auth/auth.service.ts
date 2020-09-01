import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/users/user.service';
import RegisterDto from './dto/register.dto';
import {TokenPayload} from './tokenPayload.interface'
import {RoleService} from '../roles/role.service'
import {Role} from '../roles/role.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private roleService:RoleService
  ) {}

  public async register(registrationData: RegisterDto) {
    const roleName = registrationData.role;
    
    let role:Role;
    try{
      role = await this.roleService.getRole(roleName)
      if(!role)
        throw new HttpException("Role does not exist", HttpStatus.BAD_REQUEST)
    } catch (error){
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const createdUser = await this.userService.create({
        ...registrationData,
        password: hashedPassword,
        role: role
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      if (error?.code === '23505') {
        throw new HttpException(
          'User with that email already exist',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.userService.getByEmail(email);
      await this.verifyPassword(plainTextPassword, user.password);
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST);
    }
  }

  public getCookieWithJwtToken(userId: number){
    const payload: TokenPayload = {userId};
    const token  = this.jwtService.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordMatching)
      throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST);
  }
}
