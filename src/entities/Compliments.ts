import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Tag } from "./Tag";
import { User } from "./User";
import { v4 as uuid } from 'uuid';

@Entity("compliments")
class Compliment {

  @PrimaryColumn()
  readonly id: string;

  @JoinColumn({
    name: 'user_sender'
  })
  @ManyToOne(() => User)
  userSender: User;

  @JoinColumn({
    name: 'user_receiver'
  })
  @ManyToOne(() => User)
  userReceiver: User;

  @JoinColumn({
    name: 'tag_id'
  })
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }

};

export { Compliment };