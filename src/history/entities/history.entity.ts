import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('history')
export class history {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pathName: string;

  @Column()
  hotel_name: string;

  @Column()
  checkIn: string;

  @Column()
  checkOut: string;
}
