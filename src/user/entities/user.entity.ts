import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface TaskStatus {
  name: string;
  color: string;
}

@Schema({ collection: 'users' })
export class User extends Document {
  private static default_status: TaskStatus[] = [
    { name: 'Completed', color: '#05A301' },
    { name: 'In Progress', color: '#0225FF' },
    { name: 'Not Started', color: '#F21E1E' },
  ];

  private static default_priorities: TaskStatus[] = [
    { name: 'Extreme', color: '#05A301' },
    { name: 'Moderate', color: '#0225FF' },
    { name: 'Low', color: '#F21E1E' },
  ];

  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  display_name: string;

  @Prop({ required: false })
  dob: string;

  @Prop({ default: 0 })
  is_email_verified: number;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({
    default: User.default_status,
  })
  task_status: TaskStatus[];

  @Prop({
    default: User.default_priorities,
  })
  task_priorities: TaskStatus[];
}
export const UserSchema = SchemaFactory.createForClass(User);
