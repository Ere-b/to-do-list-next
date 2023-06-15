import React, { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
    textInputRef.current!.value = ""; // 입력 후에 input 창을 초기화
  };

  return (
    <form className="flex justify-center" onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text" className="p-1">
          What to do:{" "}
        </label>
        <input className="p-1 text-black" type="text" id="todo-text" ref={textInputRef} />
        <button className="p-1" type="submit">
          추가
        </button>
      </div>
    </form>
  );
};

export default NewTodo;
