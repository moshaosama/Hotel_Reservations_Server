import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hotel } from './entities/hotel.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(hotel)
    private hotelRepository: Repository<hotel>,
  ) {}

  findAllHotel() {
    return this.hotelRepository.find();
  }
}
