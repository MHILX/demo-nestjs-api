/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Put,
  Param,
  Query,
  Body,
  Post,
  Patch,
  Delete,
  HttpStatus,
  Logger,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { Exclude, plainToClass } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';

@Controller({ path: '/users' })
export class UserController {
  constructor(
    private readonly userService: UserService,
    private logger: Logger,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    this.logger.log(
      `Invoked create method. User: ${JSON.stringify(createUserDto)}`,
    );

    const newUser = plainToClass(User, createUserDto);
    return this.userService.create(newUser);
  }

  @Get()
  async findAll(): Promise<User[]> {
    this.logger.log(`Invoked findAll method.`);
    const users = await this.userService.findAll();

    if (!users || users.length === 0) {
      const notFoundMessage = `Users not found.`;
      this.logger.log(notFoundMessage);
      throw new NotFoundException(notFoundMessage);
    }

    return users;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    this.logger.log(`Invoked findOne method. Id: ${id}`);
    const user = await this.userService.findOne(id);

    if (!user || Object.keys(user).length === 0) {
      const notFoundMessage = `User not found. Id: ${id}`;
      this.logger.log(notFoundMessage);
      throw new NotFoundException(notFoundMessage);
    }

    this.logger.log(`Found user. User: ${JSON.stringify(user)}`);
    return user;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
