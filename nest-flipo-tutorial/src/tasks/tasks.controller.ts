import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.taskService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id') // esto es un parámetro de la ruta
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Patch(':id') // esto es un parámetro de la ruta
  updateTask(@Param('id') id: string, @Body() UpdateTaskDto: UpdateTaskDto) {
    return this.taskService.updateTask(id, UpdateTaskDto.description);
  }

  /* updateTask(id: string, @Body() UpdateTaskDto: UpdateTaskDto) {
    return 'Task updated .... id' + id;
  } */
}

@Controller('diego')
export class DiegoController {
  @Get()
  helloDiego() {
    return 'Hello Diego';
  }
}
