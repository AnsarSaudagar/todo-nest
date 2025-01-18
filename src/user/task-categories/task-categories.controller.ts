
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { TaskCategoriesService } from './task-categories.service';

@Controller('task-categories')
export class TaskCategoriesController{
    constructor(
        private readonly taskCategoryService: TaskCategoriesService
      ) {}

    @UseGuards(AuthGuard)
    @Get()
    getStatus(@Request() req: any){
        const userId = req.user.sub;
        return this.taskCategoryService.findStatus(userId);
    }

    @UseGuards(AuthGuard)
    @Patch()
    updateStatus(@Request() req: any){
        const userId = req.user.sub;
        return this.taskCategoryService.updateStatus(userId, req.body);
        // return req.body;
    }
}