import { Injectable } from '@nestjs/common';
import { ReadFileService } from './readFile.service';
import { Population } from 'src/schemas/population.schema';
import { FileData } from '../../interfaces/fileData.interface';

interface Top {
  year: string;
  country: string[];
  population: number[];
  id: string[];
}

@Injectable()
export class TopService {
  constructor(private readonly readFileSerivice: ReadFileService) {}

  private initialize() {
    let top: Top[] = [];
    top = [];
    for (var i = 5; i < 17; i++) {
      top.push({
        year: FileData[i].slice(2),
        country: ['', '', ''],
        population: [0, 0, 0],
        id: ['', '', ''],
      });
    }
    return top;
  }

  async getTop() {
    let allData = await this.readFileSerivice.getPopulation();
    let population: any;
    let top = this.initialize();
    allData.map((val: Population) => {
      population = val.population;
      for (var i = 0; i < 12; i++) {
        if (
          top[i].population[0] < parseInt(population[i]) &&
          top[i].id[1] !== val._id &&
          top[i].id[1] !== val._id
        ) {
          top[i].population[2] = top[i].population[1];
          top[i].id[2] = top[i].id[1];
          top[i].population[1] = top[i].population[0];
          top[i].id[1] = top[i].id[0];
          top[i].population[0] = parseInt(population[i]);
          top[i].id[0] = val._id;
        } else if (
          top[i].population[1] < parseInt(population[i]) &&
          top[i].id[0] !== val._id
        ) {
          top[i].population[2] = top[i].population[1];
          top[i].id[2] = top[i].id[1];
          top[i].population[1] = parseInt(population[i]);
          top[i].id[1] = val._id;
        } else if (
          top[i].population[2] < parseInt(population[i]) &&
          top[i].id[0] !== val._id &&
          top[i].id[1] !== val._id
        ) {
          top[i].population[2] = parseInt(population[i]);
          top[i].id[2] = val._id;
        }
      }
    });
    for (var i = 0; i < 12; i++) {
      for (var j = 0; j < 3; j++) {
        top[i].country[j] = await this.readFileSerivice.getCountries(
          top[i].id[j],
        );
      }
    }
    return top;
  }
}
