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
  HttpStatus,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller({ path: '/users' })
export class UserController {
  constructor(
    private readonly userService: UserService,
    private logger: Logger,
  ) { }

  @Get()
  getUsers(@Query('name') name: string = null): User[] {
    if (!name) {
      return this.userService.getUsers();
    } else {
      this.logger.log(`getUsers has been invoked. Param name: '${name}'`);
      return this.userService.findUsersByName(name);
    }
  }

  @Get(':id')
  getUserById(@Param('id') id: number): User {
    this.logger.log(`getUserById has been invoked. Param id: ${id}`);
    const user = this.userService.findUserById(id);

    if (!user) {
      this.logger.error(`User with id ${id} not found`);
      throw new NotFoundException('User not found');
    }

    this.logger.log(
      `getUserById has been invoked. Returning user: ${JSON.stringify(user)}`,
    );
    return user;
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() user: User): User {
    return this.userService.updateUser(id, user);
  }

  @Post()
  async addUser(@Body() user: User) {
    const createdUser = await this.userService.addUser(user);
    return this.userService.addUser(user);
  }

  @Patch('/:id')
  async patchUser(@Param('id') id, @Body() updates) {
    const user = await this.userService.findUserById(id);

    // apply partial updates
    Object.assign(user, updates);

    await this.userService.updateUser(id, user);

    return user;
  }
}
