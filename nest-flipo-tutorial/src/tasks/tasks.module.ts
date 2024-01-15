import { Module } from '@nestjs/common';
import { TasksController, DiegoController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController, DiegoController],
  providers: [TasksService]
})
export class TasksModule {}
