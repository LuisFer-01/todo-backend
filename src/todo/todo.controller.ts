import { Body, Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
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

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Todo {
        return this.todoService.getOne(id);
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDto): Todo {
        return this.todoService.create(createTodoDto);
    }
}
