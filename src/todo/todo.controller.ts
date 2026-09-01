import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/entities';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService
    ) {}

    @Get()
    findAll(): Todo[] {
        return this.todoService.getAll();
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDto): Todo {
        return this.todoService.create(createTodoDto);
    }
}
