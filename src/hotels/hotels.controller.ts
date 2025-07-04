import { Controller, Get, Param, Query } from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  findAllHotel() {
    return this.hotelsService.findAllHotel();
  }

  @Get('/cities')
  findCities() {
    return this.hotelsService.findCities();
  }

  @Get('/hotelName')
  findHotelByCity(@Query('hotel_name') hotel_name: string) {
    return this.hotelsService.findHotelByCity(hotel_name.trim());
  }

  @Get('/:hotel_id')
  findHotelById(@Param('hotel_id') hotel_id: number) {
    return this.hotelsService.findHotelById(hotel_id);
  }
}
