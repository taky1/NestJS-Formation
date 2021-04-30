import { TodoDto } from './create-todo.dto';
import { Entity, EntityRepository, Repository } from "typeorm";
import { Todo } from "./todo.entity";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo>
{
    async createTodo(todoDto: TodoDto) {

        const {title, completed } = todoDto;

        const todo  = new Todo();

        todo.title = title;

        todo.completed = completed;

        await todo.save();

        return todo;
    }

}