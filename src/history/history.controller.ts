import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  createHistory(@Body() data: CreateHistoryDto) {
    return this.historyService.createHistory(data);
  }

  @Get()
  getHistories() {
    return this.historyService.getHistories();
  }

  @Delete()
  DeleteHistories() {
    return this.historyService.DeleteHistories();
  }
}
