import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../users/user.entity' 
import {CreateRoleDto } from './dto/createRole.dto'

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column({ unique: true })
  public role: string;
 
  @OneToMany(() => User, (user:User) => user.email)
  public users:User[]
}
 