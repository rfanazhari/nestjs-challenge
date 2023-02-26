import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id: bigint;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullName: string;
  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
  })
  email: string;
  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  password: string;
}
