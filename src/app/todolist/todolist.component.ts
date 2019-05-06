import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: Todo[] = [];
  newTodo: Todo = new Todo();
  lastId: number = 1;

  constructor() {
    this.todos.push(new Todo({
      id: 0,
      title: 'First Item'
    }));
  }

  ngOnInit() {
  }

  addTodo() {
    let todo = this.newTodo;
    todo.id = ++this.lastId;
    
    this.todos.push(todo);
    this.newTodo = new Todo();
  }

  deleteItem(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

}
