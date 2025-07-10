import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  Email: string;

  @Column()
  @MinLength(5)
  @MaxLength(10)
  @IsNotEmpty({ message: 'Password is required' })
  Password: string;
}
