import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './entities/auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([user])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
