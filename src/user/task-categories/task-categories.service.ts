import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class TaskCategoriesService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findStatus(id: string) {
    const result: any = await this.userModel
      .findOne(
        { _id: new ObjectId(id) },
        {
          _id: 0,
          task_status: 1,
        },
      )
      .exec();

    return result['task_status'] || [];
  }

  async findPriority(id: string) {
    const result: any = await this.userModel
      .findOne(
        { _id: new ObjectId(id) },
        {
          _id: 0,
          task_priorities: 1,
        },
      )
      .exec();

    return result['task_priorities'] || [];
  }

  async updateStatus(id: string, new_data: any){
    const result: any = await this.userModel.updateOne({_id: id}, new_data).exec();
    
    return result['task_status'];
  }
}
