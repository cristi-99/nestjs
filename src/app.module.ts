import { Module, ValidationPipe, Injectable } from '@nestjs/common';
import * as Joi from "@hapi/joi"
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReadFileModule } from './topCountries/readFile/readFile.module';
import { LocalStrategy } from './auth/local.strategy'
import { CsvModule } from 'nest-csv-parser';
import { AuthService} from './auth/auth.service'
import { JwtModule, JwtService} from '@nestjs/jwt'
import { JwtAuthGuard } from './auth/jwt-auth-guard'
import { JwtStrategy } from './auth/jwt.strategy'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './users/user.module'
import { DatabaseModule } from './database/database.module'
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './roles/role.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/roles.guard';
//import { ConstDto } from './const.dto';

import { ConstDto } from './const.dto';



@Module({
  imports: [
    
    RoleModule,
    UserModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
        },
      }),
    }),
    CsvModule,
    MongooseModule.forRoot(new ConfigService().get('DATABASE_PATH')),
    ReadFileModule,
    AuthModule
  ],

  controllers: [],
  providers: [AppService, AuthService, LocalStrategy, JwtAuthGuard, JwtStrategy, ConfigService, {
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
})
export class AppModule {}
