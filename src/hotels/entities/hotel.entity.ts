import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hotel_id: string;

  @Column()
  hotel_name: string;

  @Column()
  SOURCE: string;

  @Column()
  base_price: string;

  @Column()
  checkIn: string;

  @Column()
  checkOut: string;

  @Column()
  count: string;

  @Column()
  rating: string;

  @Column()
  Info: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;
}
