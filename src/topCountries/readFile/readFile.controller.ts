import {
  Controller,
  Post,
  Logger,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {ReadFileService} from './readFile.service';
import { Request } from 'express';
import * as fs from 'fs';

@Controller('api/readFile')
export class ReadFileController {
    constructor(private readFileService: ReadFileService){}
  private readonly logger = new Logger();
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    fs.writeFileSync(`./${file.originalname}`, file.buffer.toString());
     this.readFileService.onStart();
  }
}
