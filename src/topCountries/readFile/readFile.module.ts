import { Module } from '@nestjs/common';
import { ReadFileController } from './readFile.controller';
import { ReadFileService } from './readFile.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from 'src/schemas/country.schema';
import { Population, PopulationSchema } from 'src/schemas/population.schema';
import { TopController } from './top.controller';
import { TopService } from './top.service'
import { CsvModule } from 'nest-csv-parser';
import { ViewController } from './view.controller';
import { CountriesController } from '../countries/countries.controller';
import { CountriesService } from '../countries/countries.service';

@Module({
  imports: [
    CsvModule,
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema },{ name: Population.name, schema: PopulationSchema }]),
  ],
  controllers: [ReadFileController, TopController, ViewController, CountriesController],
  providers: [ReadFileService, TopService, CountriesService],
})
export class ReadFileModule {}
