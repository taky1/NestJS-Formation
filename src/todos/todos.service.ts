import { TodoDto } from './create-todo.dto';
import { TodoRepository } from './todo.repository';
import { Injectable} from '@nestjs/common';
import { Todo } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()

export class TodoService {
      
    constructor(
        @InjectRepository(TodoRepository)
        private todoRepository:TodoRepository) {}
    
    createTodo (todoDto: TodoDto) :Promise<Todo> {
        return this.todoRepository.createTodo(todoDto);

    }

}