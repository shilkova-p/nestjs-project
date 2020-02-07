import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('int')
  price: number;

  
}