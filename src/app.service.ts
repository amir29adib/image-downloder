import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Go To /api To See Endpoints ;)';
  }
}
