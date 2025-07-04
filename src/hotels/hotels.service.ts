import { Injectable, NotFoundException } from '@nestjs/common';
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

  findCities() {
    return this.hotelRepository
      .createQueryBuilder('hotel')
      .select('hotel_name')
      .distinct(true)
      .getRawMany();
  }

  findHotelByCity(hotel_name: string) {
    if (!hotel_name) {
      throw new NotFoundException('hotel_name not found');
    }
    return this.hotelRepository.findBy({ hotel_name });
  }

  findHotelById(hotel_id: number) {
    if (!hotel_id) {
      throw new NotFoundException('hotel_name not found');
    }
    return this.hotelRepository
      .createQueryBuilder('HotelById')
      .select()
      .where( { id: hotel_id })
      .getOne();
  }
}
