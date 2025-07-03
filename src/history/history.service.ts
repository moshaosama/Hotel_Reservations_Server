import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { history } from './entities/history.entity';
import { Repository } from 'typeorm';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(history)
    private hotelRepository: Repository<history>,
  ) {}

  createHistory(data: CreateHistoryDto) {
    if (!data) {
      throw new NotFoundException('Data not found');
    }
    return this.hotelRepository.save(data);
  }

  getHistories() {
    const data = this.hotelRepository
      .createQueryBuilder()
      .select(['pathName', 'hotel_name', 'checkIn', 'checkOut'])
      .distinct(true)
      .getRawMany();
    return data;
  }
}
