import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../users/user.entity';
import { Role } from '../roles/role.entity';
import { Roles1598535373755 } from '../migration/1598535373755-Roles';
import { isString } from 'util';
import { ConstDto } from 'src/const.dto';
import { UserService } from 'src/users/user.service';
import { ConstDtoModule } from 'src/const.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule,ConstDtoModule],
      inject: [ConfigService, ConstDto],
      
      useFactory: (configService: ConfigService, constDto:ConstDto) => ({
        
        type: 'postgres',
        host: constDto.POSTGRES_HOST,
        port: constDto.POSTGRES_PORT,
        username: constDto.POSTGRES_USER,
        password: constDto.POSTGRES_PASSWORD,
        database: constDto.POSTGRES_DB,
        synchronize: true,
        migrations: [Roles1598535373755],
        migrationsRun: true,
        entities: [User, Role],
      }),
    }),
  ],
  providers: [ConstDto]
})
export class DatabaseModule {}
