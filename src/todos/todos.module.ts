import { TodoRepository } from './todo.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './todos.controller';
import { TodoService } from './todos.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([TodoRepository])
  ],
  controllers: [TodosController],
  providers: [TodoService]
})
export class TodosModule {}
