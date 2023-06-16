"use client";
import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "../model/todo.model";

const TodoListPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEdit, setIsEdit] = useState<Pick<Todo, "id"> | boolean>();

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text: text, done: false }]);
  };

  const todoEditHandler = (todoId: string, text: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => (todo.id === todoId ? { ...todo, text: text } : todo));
    });
  };

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

  const data = await fetch("/api/todos");
  console.log(data);

  return (
    <div className="p-8">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} onDoneTodo={todoDoneHandler} />
    </div>
  );
};

export default TodoListPage;
