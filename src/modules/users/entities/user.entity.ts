import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasOne,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @CreatedAt
  createdOn: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionOn: Date;
}
