import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];
  newTodoText: string = '';
  isOnline = navigator.onLine;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodoListFreshness();    
  }

  loadTodoListPerformance() {
    this.todoService.getTodoListPerformance().subscribe(data => {
      this.todoList = data;
    });
  }

  getFreshData() {
    if (this.isOnline) {
      this.loadTodoListFreshness();
    }
  }

  loadTodoListFreshness() {
    this.todoService.getTodoListFreshness().subscribe(data => {
      this.todoList = data;
    });
  }

  toggleTodoStatus(todo: Todo) {
    // Toggle the completion status of a todo
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    // Remove a todo from the list
    this.todoList = this.todoList.filter(item => item !== todo);
  }

  addTodo() {
    if (this.newTodoText) {
      // Add a new todo item
      const newTodo: Todo = {
        description: this.newTodoText,
        completed: false
      };
      this.todoList.push(newTodo);
      this.newTodoText = ''; // Clear the input field
    }
  }

}
