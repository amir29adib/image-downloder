import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from './status/status.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [StatusModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
