import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Menu {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  available: boolean;
}
