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

@Module({
  imports: [
    JwtModule.register({
      secret: authSecret.secret,
      signOptions: { expiresIn: '60s' },
    }),
    CsvModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Statistics'),
    ReadFileModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, LocalStrategy, JwtAuthGuard, JwtStrategy],
})
export class AppModule {}
