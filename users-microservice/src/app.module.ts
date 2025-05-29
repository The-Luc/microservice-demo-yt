import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'mysql_db',
      port: +(process.env.DB_PORT || 3306),
      username: process.env.DB_USER || 'app_user',
      password: process.env.DB_PASSWORD || 'app_password',
      database: process.env.DB_NAME || 'nestjs-microservice',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true, // turn off in production
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
