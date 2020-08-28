import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CreateUserDto} from './dto/createUser.dto';
import {User} from './user.entity';

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){}

    async create(userData: CreateUserDto, ){
        const newUser = await this.usersRepository.create(userData);
        await this.usersRepository.save(newUser);
        return newUser;
    }
    async getAllUsers(){
        return this.usersRepository.find();
    }

    async getByEmail(email: string){
        const user = await this.usersRepository.findOne({email})
        if(user){
            return user;
        }
        throw new HttpException('User with that email does not exist', HttpStatus.NOT_FOUND)
    }

    async getById(id: number) {
        const user = await this.usersRepository.findOne( id ,{relations: ['role']});
        if (user) {
          return user;
        }
        throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
      }

}
