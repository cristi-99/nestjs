import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../roles/role.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column({ unique: true })
  public email: string;
 
  @Column()
  public name: string;
 
  @Column()
  public password: string;

  @ManyToOne(() => Role, (role: Role) => role.role)
  @JoinColumn()
  public role:Role
}
 