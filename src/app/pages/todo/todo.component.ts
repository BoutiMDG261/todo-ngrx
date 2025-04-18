import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AddListComponent } from '../../components/add-list/add-list.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { Store } from '@ngrx/store';
import { TodoState } from '../../store/todo.state';
import { selectTodos } from '../../store/todo.selectors';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [AddListComponent, TodoListComponent, AsyncPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  private readonly _store = inject(Store<TodoState>);
  private readonly _cdRef = inject(ChangeDetectorRef);
  todos$ = this._store.select(selectTodos);

  todoStats$ = this.todos$.pipe(
    map(todos => {
      const count = todos.length;
      const countCompleted = todos.filter(todo => todo.completed).length;
      const countNotCompleted = count - countCompleted;
      return { count, countCompleted, countNotCompleted };
    })
  );

  ngAfterViewInit() {
    this._cdRef.detectChanges();
  }
}
