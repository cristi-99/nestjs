import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class EditCountryDto {
 
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  year: Array<string>;
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  population: Array<string>;
}
