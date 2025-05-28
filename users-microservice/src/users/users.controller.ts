import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller()
export class UserMicroserviceController {
  constructor() {}

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    console.warn('DEBUGPRINT[36]: users.controller.ts:10: data=', data);
    return {
      ...data,
      processed: true,
    };
  }
}
