import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskStatus } from 'src/user/entities/user.entity';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    title: string;
    description: string;
    image ?: string;
    deadline : Date;
    priority ?: TaskStatus;
    status ?: TaskStatus;
}
