import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Messages } from './entities/messages.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Messages)
    private readonly messageRepository: Repository<Messages>,
  ) {}

  // add user service
  create(body: CreateUserDto) {
    let user: User = new User();
    user.Name = body.Name;
    user.Email = body.Email;
    return this.usersRepository.save(user);
  }

  // user auth check login time

  async finduser({ request, responce }) {
    try {
      const Email = request.body.Email;
      // console.log(Email);

      const result = await this.usersRepository.findOne({
        where: {
          Email: Email,
        },
      });
      // console.log(result);

      if (!result) {
        return await responce.render('login');
        // return 'invalid Credentials';
      }

      return await responce.render("message")
    } catch (error) {
      console.log('>>>>>>>>>>', error);
    }
  }

  // get all user data

  allUser() {
    return this.usersRepository.find();
  }

  // message part
  findmessage() {
    return this.messageRepository
      .find
      // {
      //   where:{
      //     SenderId:{
      //       id:1
      //     }
      //   }
      // }
      ();
  }
}
