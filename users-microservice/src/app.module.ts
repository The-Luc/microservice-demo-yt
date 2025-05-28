import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: +(process.env.DB_PORT || 3306),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'users_db',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true, // turn off in production
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
