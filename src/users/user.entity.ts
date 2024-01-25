import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column('timestamp')
  createdAt?: Date;

  @Column({ default: true })
  isActive: boolean;

  // getters and setters

  // get fullname() {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  // set fullname(name: string) {
  //   [this.firstName, this.lastName] = name.split(' ');
  // }
}
