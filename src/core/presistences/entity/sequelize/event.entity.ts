import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Event extends Model<Event> {
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
  name: string;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banner: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  slug: string;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isDeleted: boolean;
}
