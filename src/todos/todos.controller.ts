import { TodoService } from './todos.service';
import { TodoDto } from './create-todo.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('todos')
export class TodosController {

    constructor(private todoService: TodoService) { }

    @Post()
    async persistTodo(@Body() todoDto: TodoDto) {

        return await this.todoService.createTodo(todoDto);
    }
}
