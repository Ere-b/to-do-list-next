"use client";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "../todo.model";

const TodoListPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text: text, done: false }]);
  };

  // const todoEditHandler = (todoId: string) => {
  //   setTodos((prevTodos) => (return;));
  // };

  const todoDoneHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => (todo.id === todoId ? { ...todo, done: !todo.done } : todo));
    });
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="p-8">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} onDoneTodo={todoDoneHandler} />
    </div>
  );
};

export default TodoListPage;
