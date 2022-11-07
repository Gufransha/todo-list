import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i: number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  // onTab() {
  //   // this.todoDelete.emit(todo);
  //   console.log('onTab has been trigger');
  // }

  onClick(todo:Todo){
    this.todoDelete.emit(todo)
    console.log('onClick has been triggered')
  }


  theEdit = '';

    onEdit(todo){
        todo.title =this.theEdit;
        console.log(todo)
    }

  onCheckboxClick(todo){
this.todoCheckBox.emit(todo)
  }
}
