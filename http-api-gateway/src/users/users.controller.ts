import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('users')
export class UserController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsService: ClientProxy,
  ) {} //

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    console.warn('DEBUGPRINT[35]: users.controller.ts:12: payload=', payload);
    this.natsService.send('createUser', payload);
  }
}
