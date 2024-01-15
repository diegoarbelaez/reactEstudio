import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users'})

export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, nullable: false, default: '' })
  username: string; 
  @Column({nullable: false, default: ''})
  password: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;
  @Column({ nullable: true })
  authStrategy: string;
}
