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
    <form className="flex flex-row gap-1" onSubmit={todoSubmitHandler}>
      <label htmlFor="todo-text" className="p-1">
        What to do:
      </label>
      <input
        className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
        type="text"
        id="todo-text"
        ref={textInputRef}
      />
      <button
        className="px-4 py-2 font-semibold text-sm bg-black text-white rounded border-hidden shadow-sm"
        type="submit"
      >
        추가
      </button>
    </form>
  );
};

export default NewTodo;
