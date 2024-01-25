import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    const user = this.usersRepository.findOneBy({ id: id });
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  // findUsersByName(name: string): UserModel[] {
  //   return users.filter((user) => {
  //     return user.name.toLowerCase() === name.toLowerCase();
  //   });
  // }

  // updateUser(id: number, updates: Partial<UserModel>): UserModel | undefined {
  //   return users.find((user) => {
  //     if (user.id === id) {
  //       user = { ...user, ...updates };
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  // addUser(user: User): User {
  //   // Find max ID from existing users
  //   const maxId = Math.max(...users.map((u) => u.id));

  //   // Assign new ID
  //   user.id = maxId + 1;

  //   // Add user to collection
  //   users.push(user);

  //   return user;
  // }
}
