import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMicroserviceController } from './users.controller';
import { User } from 'src/typeorm/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserMicroserviceController],
  providers: [],
})
export class UserModule {}
