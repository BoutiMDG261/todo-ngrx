import { createAction, props } from "@ngrx/store";
import { Todo } from "../models/todo";

// load
export const loadTodos = createAction(
    '[Todo] Load Todos'
);
export const loadTodosSuccess = createAction(
    '[Todo] Load Todos Success', props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(
    '[Todo] Load Todos', props<{ error: any }>()
);

//update
export const updateTodo = createAction(
    '[Todo] Update Todo',
    props<{ todo: Todo }>()
);

export const updateTodoSuccess = createAction(
    '[Todo] Update Todo Success',
    props<{ todo: Todo }>()
);

//delete
export const deleteTodo = createAction(
    '[Todo] Delete Todo',
    props<{ todo: Todo }>()
);

export const deleteTodoSuccess = createAction(
    '[Todo] Delete Todo Success',
    props<{ todo: Todo }>()
);

export const addTodo = createAction(
    '[Todo] Add Todo',
    props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
    '[Todo] Add Todo Success',
    props<{ todo: Todo }>()
);

export const addTodoFailure = createAction(
    '[Todo] Add Todo Failure',
    props<{ error: any }>()
);
