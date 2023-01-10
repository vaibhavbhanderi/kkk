import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, { eager: true })
  @JoinColumn()
  SenderId: User;

  @OneToOne(() => User,{eager:true})
  @JoinColumn()
  ReceiverId: User;

  @Column()
  Text: string;

  @CreateDateColumn()
  CreteAt: Date;

  @UpdateDateColumn()
  UpdateAt: Date;
}
