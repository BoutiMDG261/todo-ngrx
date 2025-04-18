import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../services/todo.service";
import * as TodoActions from './todo.actions';
import { catchError, map, merge, mergeMap, of } from "rxjs";

@Injectable()
export class TodoEffects {
    private readonly actions$ = inject(Actions);
    private readonly _todoService = inject(TodoService);

    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.loadTodos),
            mergeMap(() =>
                this._todoService.getTodos().pipe(
                    map(todos => TodoActions.loadTodosSuccess({ todos })),
                    catchError(error => of(TodoActions.loadTodosFailure({ error })))
                )
            )
        )
    );

    // update
    updateTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.updateTodo),
            mergeMap(({ todo }) =>
                this._todoService.updateTodo(todo).pipe(
                    map(updated => TodoActions.updateTodoSuccess({ todo: updated })),
                    // catchError(error => of(TodoActions.loadTodosFailure({ error })))
                )
            )
        )
    );

    // delete
    deleteTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.deleteTodo),
            mergeMap(({ todo }) =>
                this._todoService.deleteTodo(todo).pipe(
                    map(() => TodoActions.deleteTodoSuccess({ todo })),
                    // catchError(() => of(TodoActions.deleteTodoFailure()))
                )
            )
        )
    );

    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.addTodo),
            mergeMap(({ todo }) =>
                this._todoService.addTodo(todo).pipe(
                    map((newTodo) => TodoActions.addTodoSuccess({ todo: newTodo })),
                    catchError(error => of(TodoActions.addTodoFailure({ error })))
                )
            )
        )
    );

}