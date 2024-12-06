import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class StatusService {
  private startTime: number;

  constructor(private dataSource: DataSource) {
    this.startTime = Date.now();
  }

  async getStatus() {
    const uptime = Math.floor((Date.now() - this.startTime) / 1000);
    const dbStatus = await this.checkDatabase();
    
    return {
      status: 'OK',
      uptime: `${uptime}s`,
      database: dbStatus,
    };
  }

  private async checkDatabase() {
    try {
      await this.dataSource.query('SELECT 1');
      return 'Connected';
    } catch (error) {
      return 'Disconnected';
    }
  }
}
