import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { get } from 'http';
import { Res } from '@nestjs/common/decorators';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @Render('home')
  Index() {
    return { message: 'welcome' };
  }

  // add user from database
  @Post('/adduser')
  @Render('login')
  create(
    @Req()
    request: Request,
  ) {
    // console.log(request.body);
    return this.usersService.create(request.body);
  }

  // login part
  @Post('/userlogin')
   
  async Userlogin(
    @Req()
    request: Request,
    @Res()
    responce: Response,
  ) {
    return await this.usersService.finduser({ request, responce });
  }

  // find all user api
  @Get('alluser')
  getUsers() {
    return this.usersService.allUser();
  }

  // get message part
  @Get('allmessage')
  allmessage() {
    return this.usersService.findmessage();
  }
}
