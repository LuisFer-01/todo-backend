import { Module } from '@nestjs/common';
import { TodoModule } from '../../contexts/tasks/todo/todo.module';
import { TodoController } from './todo.controller';

@Module({
    imports: [TodoModule],
    controllers: [TodoController],
    providers: [],
})
export class ApiModule {}
