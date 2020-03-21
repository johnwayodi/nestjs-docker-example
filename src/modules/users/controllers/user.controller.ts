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
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { CreateUserDto } from './../dtos/create-user.dto';
import { UserService } from '../services/user.service';
import { ResponseService } from '../../shared/services/response.service';
import { ProfileService } from '../services/profile.service';
import { UpdateProfileDto } from '../dtos/update-profile.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly profileService: ProfileService,
    private readonly resService: ResponseService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() data: CreateUserDto, @Res() res: Response) {
    const user = await this.userService.create(data);
    this.resService.sendResponse(
      res,
      HttpStatus.CREATED,
      'user created successful',
      user,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Res() res: Response) {
    const users = await this.userService.findAll();
    this.resService.sendResponse(
      res,
      HttpStatus.OK,
      'users fetched successfully',
      users,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') userId: number, @Res() res: Response) {
    const user = await this.userService.findById(userId);
    this.resService.sendResponse(
      res,
      HttpStatus.OK,
      'user fetched successfully',
      user,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deactivate(@Param('id') userId: string, @Res() res: Response) {
    this.resService.sendResponse(
      res,
      HttpStatus.NOT_IMPLEMENTED,
      'method not yet implemented',
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id/profile')
  async getProfile(@Param('id') userId: number, @Res() res: Response) {
    const profile = await this.profileService.get(userId);
    this.resService.sendResponse(
      res,
      HttpStatus.OK,
      'profile fetched succesfully',
      profile,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id/profile')
  async updateProfile(
    @Param('id') userId: number,
    @Body() data: UpdateProfileDto,
    @Res() res: Response,
  ) {
    const profile = await this.profileService.update(userId, data);
    this.resService.sendResponse(
      res,
      HttpStatus.OK,
      'profile updated successfully',
      profile,
    );
  }
}
