import { Injectable } from '@nestjs/common';
import { FilePath } from 'src/types/file.path';

@Injectable()
export class SftpService {
  moveFiles(filePath: FilePath): string {
    console.log(filePath);
    console.log('source base64 ', this.deCodeBase64(filePath.sourceAuth));
    console.log('dest base64 ', this.deCodeBase64(filePath.destinationAuth));
    return 'success';
  }

  deCodeBase64(str: string): string {
    let buff = new Buffer(str, 'base64');
    let text = buff.toString('ascii');
    return text;
  }
}
