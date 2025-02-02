import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TaskStatus } from 'src/user/entities/user.entity';

@Schema({ collection: 'tasks' })
export class Task extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({required: true})
  user_id: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: true })
  deadline: Date;

  @Prop({type: Object, default: { name: 'Low', color: '#F21E1E' } })
  priority: TaskStatus;

  @Prop({type: Object, default: { name: 'Not Started', color: '#F21E1E' } })
  status: TaskStatus;

  @Prop({ default: false })
  is_vital: boolean;

  @Prop({ default: Date.now })
  created_at: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
