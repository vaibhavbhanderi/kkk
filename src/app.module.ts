import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Messages } from './users/entities/messages.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AppGateway } from './app/app.gateway';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 49153,
      username: 'root',
      password: 'mysqlpw',
      database: 'chat3',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Messages]),
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
