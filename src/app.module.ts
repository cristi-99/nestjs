import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReadFileModule } from './topCountries/readFile/readFile.module';
import { LocalStrategy } from './topCountries/auth/local.strategy'
import { CsvModule } from 'nest-csv-parser';
import { AuthService} from './topCountries/auth/auth.service'
import { Users, UserSchema } from './schemas/userModel';
import { JwtModule} from '@nestjs/jwt'
import { authSecret } from './config/auth.config'
import { JwtAuthGuard } from './topCountries/auth/jwt-auth-guard'
import { JwtStrategy } from './topCountries/auth/jwt.strategy'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';

class Service{
  constructor (private configService:ConfigService){}
  getConst(name){
    return this.configService.get(name)
  }
}

@Module({
  imports: [
  
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      secret: authSecret.secret,
      signOptions: { expiresIn: '60s' },
    }),
    CsvModule,
    MongooseModule.forRoot(new Service(new ConfigService).getConst('DATABASE_PATH')),
    ReadFileModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
  ],

  controllers: [AppController],
  providers: [AppService, AuthService, LocalStrategy, JwtAuthGuard, JwtStrategy, ConfigService, Service],
})
export class AppModule {}
