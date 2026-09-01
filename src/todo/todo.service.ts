import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/entities';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TodoService {

    private todos: Todo[] = [
        { id: 1, title: 'Todo 1', completed: false },
        { id: 2, title: 'Todo 2', completed: true },
        { id: 3, title: 'Todo 3', completed: false },
    ];

    getAll(): Todo[] {
        return this.todos;
    }

    getOne(id: number): Todo {
        const todo = this.todos.find((todo: Todo) => todo.id === id);
        if (!todo) {
            //throw new Error('Todo no Encontrado');
            throw new NotFoundException(`Todo no Encontrado ID=${id}`);
        }
        return todo;
    }

    create({ title }: CreateTodoDto): Todo {
        const id = this.todos.length + 1;
        const todo: Todo = new Todo();
        todo.id = id;
        todo.title = title;
        todo.completed = false;
        this.todos.push(todo);

        return todo;
    }
}
