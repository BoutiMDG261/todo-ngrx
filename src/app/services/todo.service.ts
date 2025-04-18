import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Todo 1',
      completed: false
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: true
    },
    {
      id: 3,
      title: 'Todo 3',
      completed: false
    },
    {
      id: 4,
      title: 'Todo 4',
      completed: false
    },
    {
      id: 5,
      title: 'Todo 5',
      completed: true
    }
  ]

  getTodos() {
    return of(this.todos);
  }

  updateTodo(updatedTodo: Todo) {
    this.todos = this.todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    return of(updatedTodo); // renvoie un Observable pour l'effect
  }

  deleteTodo(deletedTodo: Todo) {
    this.todos = this.todos.filter(todo => todo.id !== deletedTodo.id);
    return of(deletedTodo); // retourne l'Observable du todo supprimé
  }

  addTodo(newTodo: Todo) {
    // Génération d'un ID unique simple (tu peux faire mieux si tu veux)
    const nextId = this.todos.length > 0 ? Math.max(...this.todos.map(t => t.id)) + 1 : 1;
    const todoToAdd: Todo = { ...newTodo, id: nextId };

    this.todos = [...this.todos, todoToAdd];
    return of(todoToAdd);
  }
}
