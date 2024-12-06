import { Injectable } from '@nestjs/common';
import { SearchInfoDto } from './dto/serach-info.dto';

@Injectable()
export class SearchService {
  async searchInGoogle(dto: SearchInfoDto): Promise<void> {}
}
