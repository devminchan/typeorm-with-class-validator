import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ValidationEntity } from './ValidationEntity';
import { Length, Min, IsEmail } from 'class-validator';

@Entity()
export class User extends ValidationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(3)
  @Column()
  firstName: string;

  @Length(3)
  @Column()
  lastName: string;

  @Min(18)
  @Column()
  age: number;

  @IsEmail()
  @Column()
  email: string;
}
