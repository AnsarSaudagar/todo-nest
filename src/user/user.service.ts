import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TaskStatus, User } from './entities/user.entity';
import { Model, Types } from 'mongoose';
import { ObjectId } from 'mongodb';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  findAll() {
    const users = this.userModel.find();
    return users;
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  async findStatus(id: string) {
    const result: any = await this.userModel.findOne(
      { _id: new ObjectId(id) },
      {
        _id: 0,
        task_status: 1,
      },
    ).exec();
    
    return result['task_status'] || [] ;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
