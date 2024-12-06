import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class StatusService {
  private startTime: number;

  constructor() {
    this.startTime = Date.now();
  }

  getStatus() {
    const uptime = Math.floor((Date.now() - this.startTime) / 1000);
    return {
      status: 'OK',
      uptime: `${uptime}s`,
      loadAverage: os.loadavg(),
      memoryUsage: process.memoryUsage(),
    };
  }
}
