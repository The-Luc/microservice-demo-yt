import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/createPayment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsService: ClientProxy,
  ) {}

  @Post()
  createPayment(@Body() payload: CreatePaymentDto) {
    return this.natsService.emit('createPayment', payload);
  }
}
