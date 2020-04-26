import React, { useState, FormEvent, ChangeEvent } from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import { Todo } from "../interfaces/Todo";

const App = () => {
  const [todos, createTodo] = useState<Array<Todo>>([]);
  const [inputValue, changeInputValue] = useState("");

  const handleTodoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue) {
      createTodo(previousTodos => [
        ...previousTodos,
        {
          task: inputValue,
          completed: false,
          id: Math.random()
            .toString(36)
            .substring(7)
        }
      ]);
      changeInputValue("");
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeInputValue(event.currentTarget.value);
  };

  const handleTodoComplete = (id: string) => {
    const newTodo: Todo[] = [...todos];

    newTodo.find((todo: Todo) => todo.id === id)!.completed = !newTodo.find(
      (todo: Todo) => todo.id === id
    )!.completed;

    createTodo(newTodo);
  };
  let completed = todos.filter(data => !data.completed);

  return (
    <div className="app">
      {todos && todos.length > 0 ? (
        <h4>{`Total todos remaining: ${completed.length} out of ${todos.length}.`}</h4>
      ) : null}
      <Form
        onSubmit={handleTodoSubmit}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
      <TodoList todos={todos} handleTodoComplete={handleTodoComplete} />
    </div>
  );
};

export default App;
