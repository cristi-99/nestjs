import { Module } from '@nestjs/common';
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

class Service{
  constructor (private configService:ConfigService){}
  getConst(name){
    return this.configService.get(name)
  }
}

@Module({
  imports: [
    RoleModule,
    UserModule,
    DatabaseModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      })
    }),
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
    MongooseModule.forRoot(new Service(new ConfigService).getConst('DATABASE_PATH')),
    ReadFileModule,
    AuthModule
  ],

  controllers: [],
  providers: [AppService, AuthService, LocalStrategy, JwtAuthGuard, JwtStrategy, ConfigService, Service, {
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
})
export class AppModule {}
