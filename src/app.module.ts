import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReadFileModule } from './topCountries/readFile/readFile.module';

import { CsvModule } from 'nest-csv-parser';
import { from } from 'rxjs';

@Module({
  imports: [
    CsvModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Statistics'),
    ReadFileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
