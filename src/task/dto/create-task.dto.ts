import { TaskStatus } from "src/user/entities/user.entity";

export class CreateTaskDto {
    title: string;
    user_id?: string;
    description: string;
    image ?: string;
    deadline : Date;
    priority ?: TaskStatus;
    status ?: TaskStatus;
}
