import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

import { UpdateUserDto } from './../dtos/update-user.dto';
import { CreateUserDto } from './../dtos/create-user.dto';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const user = await this.userService.add(createUserDto);
    res.status(HttpStatus.CREATED).json({
      message: 'user created successful',
      user,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Res() res: Response) {
    const users = await this.userService.findAll();
    res.status(HttpStatus.OK).json({
      message: 'users fetched successfully',
      users,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') userId: number, @Res() res: Response) {
    const user = await this.userService.findById(userId);
    res.status(HttpStatus.OK).json({
      message: 'user fetched successfully',
      user,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
  ) {
    const user = await this.userService.update(userId, updateUserDto);
    res.status(HttpStatus.OK).json({
      message: 'user updated successfully',
      user,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    res.status(HttpStatus.NOT_IMPLEMENTED).json({
      message: 'method not yet implemented',
    });
  }
}
