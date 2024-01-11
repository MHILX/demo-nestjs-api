import { Injectable } from '@nestjs/common';
import { User } from './user.model';

const users: User[] = [
  new User(1, 'John'),
  new User(2, 'Jane'),
  new User(3, 'Jim'),
];

@Injectable()
export class UserService {
  getUsers(): User[] {
    return [...users];
  }

  findUserById(id: number): User | undefined {
    return users.find((user) => {
      return user.id == id;
    });
  }

  findUsersByName(name: string): User[] {
    return users.filter((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });
  }

  updateUser(id: number, updates: Partial<User>): User | undefined {
    return users.find((user) => {
      if (user.id === id) {
        user = { ...user, ...updates };
        return true;
      }
      return false;
    });
  }

  addUser(user: User): User {
    // Find max ID from existing users
    const maxId = Math.max(...users.map((u) => u.id));

    // Assign new ID
    user.id = maxId + 1;

    // Add user to collection
    users.push(user);

    return user;
  }
}
