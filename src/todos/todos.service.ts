import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todosRepository: Repository<Todo>,
  ) {}

  async getTodos() {
    return await this.todosRepository.find();
  }

  async getTodo(id: number) {
    return await this.todosRepository.findOne({ where: { id } });
  }

  async createTodo(createTodoDto: CreateTodoDto) {
    const newTodo = this.todosRepository.create(createTodoDto);
    return await this.todosRepository.save(newTodo);
  }

  async updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
    return 'Update todo';
  }

  async deleteTodo(id: number) {
    return await this.todosRepository.delete({ id });
  }
}
