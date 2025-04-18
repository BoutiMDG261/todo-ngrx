import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodoState } from '../../store/todo.state';
import { Todo } from '../../models/todo';
import { addTodo } from '../../store/todo.actions';

@Component({
  selector: 'app-add-list',
  imports: [ReactiveFormsModule],
  templateUrl: './add-list.component.html',
  styleUrl: './add-list.component.scss'
})
export class AddListComponent {
  private readonly _store = inject(Store<TodoState>);
  todoControl = new FormControl('', Validators.required);

  addTodo(e: Event) {
    e.preventDefault();
    if (this.todoControl.valid) {
      const todo: Todo = {
        id: 0, // le service va le générer
        title: this.todoControl.value ?? '',
        completed: false
      };
      this._store.dispatch(addTodo({ todo }));
      this.todoControl.reset();
    }
  }

}
