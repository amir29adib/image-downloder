import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { SearchInfoDto } from './dto/serach-info.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Images downloaded successfully.' })
  @ApiBody({
    type: SearchInfoDto,
    description: 'Json structure for login object',
  })
  async search(@Body() searchDto: SearchInfoDto): Promise<{
    status: 201;
    description: string;
  }> {
    await this.searchService.searchInGoogle(searchDto);
    return { status: 201, description: 'Images downloaded successfully.' };
  }
}
