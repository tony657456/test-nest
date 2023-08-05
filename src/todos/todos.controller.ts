import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @Get('/:id')
  @ApiParam({ name: 'id', description: 'Todo id' })
  getTodo(@Param('id') id: number) {
    return this.todosService.getTodo(id);
  }

  @Post()
  @ApiBody({ description: 'Create todo', type: CreateTodoDto })
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
  }

  @Patch('/:id')
  @ApiParam({ name: 'id', description: 'Todo id' })
  @ApiBody({ description: 'Update todo', type: UpdateTodoDto })
  updateTodo(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.updateTodo(id, updateTodoDto);
  }

  @Delete('/:id')
  @ApiParam({ name: 'id', description: 'Todo id' })
  deleteTodo(@Param('id') id: number) {
    return this.todosService.deleteTodo(id);
  }
}
