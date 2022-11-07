import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';
@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
    animations: [
        trigger('simpleFadeAnimation', [
            state('in', style({ opacity: 1 })),

            transition(':enter', [style({ opacity: 0 }), animate(900)]),

            transition(':leave', animate(800, style({ opacity: 0 }))),
        ]),
    ],
})
export class TodosComponent implements OnInit {
    localItems: string;
    todos: Todo[];
    constructor() {
        this.localItems = localStorage.getItem('todos');
        if (this.localItems == null) {
            this.todos = [];
        } else {
            this.todos = JSON.parse(this.localItems);
        }
    }

    ngOnInit(): void { }

    deleteTodo(todo: Todo) {
        console.log(todo);
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    addTodo(todo: Todo) {
        console.log(todo);
        const exist = this.todos.find(
            (obj) => obj.title === todo.title,
            (obj) => obj.desc === todo.desc,
            
        );

        if (exist) {
            alert('task already exist');
            return;
        } else if (todo.title === '') {
            alert('No Todo')
            
        } else {
            this.todos.push(todo);
        }
        console.log(this.todos);
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    toggleTodo(todo: Todo) {
        const index = this.todos.indexOf(todo);
        this.todos[index].active = !this.todos[index].active;
        localStorage.setItem('todos', JSON.stringify(this.todos));
        console.log(this.todos);
    }
}
