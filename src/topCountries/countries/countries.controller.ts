import {
  Controller,
  Post,
  Logger,
  UseInterceptors,
  Body,
  Req,
  Res,
  Put,
  Delete,
  Get,
  UseGuards
} from '@nestjs/common';

import { CountriesService } from './countries.service';
import { ReadFileService } from '../readFile/readFile.service';
import { Request, Response, response } from 'express';
import * as fs from 'fs';
import { CreateCountryDto } from './dto/createCountry.dto';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/role.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { EditCountryDto } from './dto/editCountry.dto';

@Controller('api/countries')
export class CountriesController {
  constructor(private readFileService: ReadFileService,
    private countriesService: CountriesService) {}
  private readonly logger = new Logger();
  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles('Administrator')
  createCountry(@Body() body: CreateCountryDto, @Res() res: Response) {
      this.countriesService.createCountry(body, res);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  @Roles('Administrator')
  updateCountryPopulation(@Body() countryToEdit: EditCountryDto, @Res() res: Response){
    return this.countriesService.updateCountryPopulation(countryToEdit, res);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  @Roles('Administrator')
  deleteCountry(@Body() countryToDelete:string, @Res() res:Response){
     this.countriesService.deleteCountry(countryToDelete, res)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllCountries(@Res()res:Response){
        
        res.send(await this.countriesService.GetAllCountries())
  }

}