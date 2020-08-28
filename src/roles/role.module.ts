import { Module } from '@nestjs/common';
import RoleController from './role.controller';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { JwtService,JwtModule } from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config'

@Module({
  imports: [TypeOrmModule.forFeature([Role]),
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
],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService]
})
export class RoleModule {}
