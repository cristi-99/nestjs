import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from 'src/schemas/country.schema';
import { Model } from 'mongoose';
import { Response, response } from 'express';
import { Population } from 'src/schemas/population.schema';
import { CreateCountryDto} from './dto/createCountry.dto';
import { EditCountryDto} from './dto/editCountry.dto'


@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Population.name) private PopulationModel: Model<Population>,
    @InjectModel(Country.name) private CountryModel: Model<Country>,
  ) {}

  public createCountry(data: CreateCountryDto, res: Response) {
    console.log(data);
    // if (typeof data.country_name !== 'string')
    //   throw new HttpException(
    //     'Country name must be a string',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // if (
    //   !(
    //     Array.isArray(data.population) &&
    //     data.population.length &&
    //     data.population.every(item => typeof item === 'string')
    //   )
    // )
    //   throw new HttpException(
    //     'Population must be an Array of strings',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // if (
    //   !(
    //     Array.isArray(data.year) &&
    //     data.year.length &&
    //     data.year.every(item => typeof item === 'string')
    //   )
    // )
    //   throw new HttpException(
    //     'Provide an array of years(string)',
    //     HttpStatus.BAD_REQUEST,
    //   );
    const PopulationToDB = new this.PopulationModel({
      year: data.year,
      population: data.population,
    });

    const CountryToDB = new this.CountryModel({
      country: data.country_name,
      detailsOfCountry: PopulationToDB.id,
    });
    PopulationToDB.save((err: any) => {
      if (err) throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    });
    CountryToDB.save((err: any) => {
      if (err) throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    });
    return res.status(200).send({ message: 'Data saved' });
  }

  public async updateCountryPopulation(data: EditCountryDto, res: Response) {
    const newPopulation = data.population;
    const newYear = data.year;
    const newData = { newPopulation, newYear };
    
    await this.CountryModel.findOne({ _id: data.id })
      .then((response: Country) => {
        if (!response)
          throw new HttpException(
            'Country does not exist',
            HttpStatus.BAD_REQUEST,
          );
        const id = { _id: response.detailsOfCountry };

        this.PopulationModel.update(
          id,
          { year: newYear, population: newPopulation },
          (err: Error, result) => {
            if (err)
              throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
            else
              res.status(200).send({
                message: `Population of ${response.country} was edited`,
              });
          },
        );
      })
      .catch((err: Error) => {
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public async deleteCountry(countryToDelete, res: Response) {
    countryToDelete = countryToDelete.id;
    try {
      const country = await this.CountryModel.findOne({ _id: countryToDelete });
      if (!country)
        return res.status(400).send({message: "Country not found"})
      country.deleteOne();
      let popDeleted =  await this.PopulationModel.deleteOne({
        _id: country.detailsOfCountry,
      })
      return res.status(200).send({message: `Country ${country.country} has been deleted`})
    } catch {
      (err: Error) => {
        return res.status(500).send({message: err})
      };
    }
  }

  private getPopulation(id) {
    this.PopulationModel.findById({ _id: id }).then((res: Population) => {
      return res;
    });
  }

  public async GetAllCountries() {
    let result: Country[] = [];
    await this.CountryModel.find({}).then((response: Country[]) => {
      result = response;
    });
    let val = [];
    for (let i = 0; i < result.length; i++) {
      await this.PopulationModel.findById({
        _id: result[i].detailsOfCountry,
      }).then((res: Population) => {
        val.push([result[i], res]);
      });
    }
    return val;
  }
}
