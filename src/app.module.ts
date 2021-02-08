import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { dbConfig } from '../config/db.config';
import { SftpController } from './controller/sftp.controller';
import { SftpService } from './service/sftp.service';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
  controllers: [SftpController],
  providers: [SftpService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
