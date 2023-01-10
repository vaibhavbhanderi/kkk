import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from './entities/user.entity';
import { Messages } from './entities/messages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Messages])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
