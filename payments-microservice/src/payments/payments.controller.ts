import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/createPayment.dto';

@Controller()
export class PaymentsMicroserviceController {
  constructor() {}

  @EventPattern('createPayment')
  createPayment(@Payload() data: CreatePaymentDto) {
    console.warn('DEBUGPRINT[37]: payments.controller.ts:10: data=', data);
    return {
      ...data,
      processed: true,
    };
  }
}
