import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [UserModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
