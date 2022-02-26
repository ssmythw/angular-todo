import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(val: any) {
    console.log(val);
    this.todos.push(val.todo);
  }

  deleteTodo(index: any) {
    this.todos.splice(index, 1);
  }
}
