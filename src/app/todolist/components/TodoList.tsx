import React from "react";

interface TodoListProps {
  items: { id: string; text: string; done: boolean }[];
  onDeleteTodo: (id: string) => void;
  onDoneTodo: (id: string) => void;
}

const TodoList = ({ items, onDeleteTodo, onDoneTodo }: TodoListProps) => {
  return (
    <div className="flex-col">
      <div>
        <h1 className="text-lg">Todo</h1>
        <ul>
          {items.map((todo) => {
            if (todo.done === false) {
              return (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                  <button className="p-1" onClick={() => onDoneTodo(todo.id)}>
                    완료
                  </button>
                  <button className="p-1" onClick={() => onDeleteTodo(todo.id)}>
                    수정
                  </button>
                  <button className="p-1" onClick={() => onDeleteTodo(todo.id)}>
                    삭제
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div>
        <h1 className="text-lg">Complete</h1>
        <ul>
          {items.map((todo) => {
            if (todo.done === true) {
              return (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                  <button className="p-1" onClick={() => onDoneTodo(todo.id)}>
                    미완료
                  </button>
                  <button className="p-1" onClick={() => onDeleteTodo(todo.id)}>
                    수정
                  </button>
                  <button className="p-1" onClick={() => onDeleteTodo(todo.id)}>
                    삭제
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
