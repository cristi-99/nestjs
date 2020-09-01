import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateCountryDto {
 
  @IsString()
  @IsNotEmpty()
  country_name: string;
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  year: Array<string>;
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  population: Array<string>;
}
