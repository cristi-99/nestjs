import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';
import {CreateRoleDto} from '../../roles/dto/createRole.dto'
import { Role } from 'src/roles/role.entity';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}

export default RegisterDto;