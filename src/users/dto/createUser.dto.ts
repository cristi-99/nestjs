import { Role } from "src/roles/role.entity";

export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  role: Role
}