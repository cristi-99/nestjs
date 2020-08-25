import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { FileData } from '../../interfaces/fileData.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from '../../schemas/country.schema';
import { Model, isValidObjectId } from 'mongoose';
import { Population} from '../../schemas/population.schema';
import { CsvParser } from 'nest-csv-parser'
import { response } from 'express';
import {ObjectId} from 'mongodb'

class Entity {
    foo: string
    bar: string
  }

@Injectable()
export class ReadFileService {
  private years: Array<string> = [];
  constructor(
    @InjectModel(Country.name) private CountryModel: Model<Country>,
    @InjectModel(Population.name) private PopulationModel: Model<Population>,
    private readonly csvParser: CsvParser
  ) {
    for (var i = 5; i < 17; i++) {
      this.years[i - 5] = FileData[i].slice(2);
    }
  }

  async onStart() {
    const stream = fs.createReadStream('/home/cristi/project/data.csv')
    const entities: Entity[] = (await this.csvParser.parse(stream, Entity)).list as Entity[]
    entities.map((val:any) =>{
        this.saveToDB(Object.values(val).toString().split(','))
    })
  
  }

  private saveToDB(row: string[]) {
    let population: Array<string> = [];
    for (var i = 5; i < 17; i++) population[i - 5] = row[i];
    const PopulationToDB = new this.PopulationModel({
      year: this.years,
      population: population,
    });
    
    const CountryToDB = new this.CountryModel({
      country: row[FileData.country],
      detailsOfCountry: PopulationToDB.id,
    });
    PopulationToDB.save((err: any) => {
      if (err) return console.error(err);
    });
    CountryToDB.save((err: any) => {
      if (err) return console.error(err);
    });
  }

  public async getCountries(id: string){
    
      let res:string;
      await this.CountryModel.findOne({detailsOfCountry: id}).then((response: Country)=>{
        res = response.country;
      }).catch((err:Error) => console.log(err))
      return res;
  }

  public async getPopulation(){
    let res:Population[] = [];
    await this.PopulationModel.find({}).then((response: Population[]) => {
      res = response;
      
    })
    .catch((err:Error) => console.log(err))
    return res;
  }
}
