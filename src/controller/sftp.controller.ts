import { Controller, Body, Post, Res, HttpStatus } from '@nestjs/common';

import { Response } from 'express';
import { SftpService } from '../service/sftp.service';
import { FilePath } from '../types/file.path';
@Controller()
export class SftpController {
  constructor(private sftpService: SftpService) {}

  @Post('movefiles')
  moveFiles(@Body() filePath: FilePath) {
    return this.sftpService.moveFiles(filePath);
  }

  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }
}
