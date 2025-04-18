import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroTrash, heroPencilSquare, heroPlay, heroHandThumbUp, heroArrowDownTray, heroBackspace } from '@ng-icons/heroicons/outline';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Todo } from '../../models/todo';
import { Store } from '@ngrx/store';
import { TodoState } from '../../store/todo.state';
import { selectTodos } from '../../store/todo.selectors';
import { deleteTodo, loadTodos, updateTodo } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-list',
  imports: [NgIcon, NgClass, AsyncPipe, ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  providers: [provideIcons({ heroTrash, heroPencilSquare, heroPlay, heroHandThumbUp, heroArrowDownTray, heroBackspace })],
  animations: [
    trigger('todoValidation', [
      state('false', style({
        backgroundColor: 'white',
        transform: 'scale(1)',
      })),
      state('true', style({
        backgroundColor: '#d1fae5',
        transform: 'scale(1.01)',
      })),
      transition('false => true', [
        animate('300ms ease-in-out'),
      ])
    ]),
    trigger('checkIcon', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})

export class TodoListComponent implements OnInit {
  private readonly _store = inject(Store<TodoState>);
  todos$ = this._store.select(selectTodos);
  titleControl = new FormControl('', Validators.required);

  editingTodoId: number | null = null;

  ngOnInit(): void {
    this._store.dispatch(loadTodos());
  }

  validate(todo: Todo) {
    const updated = { ...todo, completed: true };
    this._store.dispatch(updateTodo({ todo: updated }));
  }

  update(todo: Todo) {
    if (this.titleControl.value) {
      const newTitle = this.titleControl.value === '' ? todo.title : this.titleControl.value;
      const updated = { ...todo, title: newTitle }
      this._store.dispatch(updateTodo({ todo: updated }));
    }
    this.toogleEdit(todo);
  }

  delete(todo: Todo) {
    this._store.dispatch(deleteTodo({ todo }));
  }

  toogleEdit(todo: Todo) {
    this.editingTodoId = this.editingTodoId === todo.id ? null : todo.id;
    this.titleControl.setValue('');
  }
}
