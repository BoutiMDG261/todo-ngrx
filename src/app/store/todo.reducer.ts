import { createReducer, on } from "@ngrx/store";
import { initialTodoState } from "./todo.state";
import * as TodoActions from './todo.actions';

export const todoReducer = createReducer(
    initialTodoState,
    on(TodoActions.loadTodos, state => ({ ...state })),

    on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos
    })),

    on(TodoActions.loadTodosFailure, (state, { error }) => ({
        ...state,
        // optionnel, si tu veux stocker l’erreur
    })),

    // update
    on(TodoActions.updateTodoSuccess, (state, { todo }) => ({
        ...state,
        todos: state.todos.map(t => t.id === todo.id ? todo : t)
    })),

    // delete
    on(TodoActions.deleteTodoSuccess, (state, { todo }) => ({
        ...state,
        todos: state.todos.filter(t => t.id !== todo.id)
    })),

    // add
    on(TodoActions.addTodoSuccess, (state, { todo }) => ({
        ...state,
        todos: [...state.todos, todo]
    }))

)