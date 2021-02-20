import React from "react";
import axios from "axios";
import "./todos.css";

function Todo({ title, todoId, completed, receiveTodos }) {
  const [isCompleted, setIsCompleted] = React.useState(completed);
  const [change, setChange] = React.useState(false);
  React.useEffect(() => {
    if (change) {
      completeTodo();
    }
  }, [isCompleted]);

  function completeTodo() {
    const dataToSend = { id: todoId, completed: isCompleted };
    axios
      .post("http://localhost:5000/todos/completed", dataToSend)
      .then((todo) => {
        console.log(todo);
      })
      .catch((e) => console.log(e));
  }

  const onChange = (e) => {
    setIsCompleted(!isCompleted);
    setChange(!change);
  };

  function deleteTodo() {
    const dataToSend = { id: todoId };
    axios
      .post("http://localhost:5000/todos/delete", dataToSend)
      .then((todo) => {
        console.log(todo);
        receiveTodos();
      })
      .catch((e) => console.log(e));
  }

  return (
    <label className="todoContainer">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onChange()}
      />
      <span className={isCompleted ? "completedTodo" : ""}>{title}</span>
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
    </label>
  );
}

function CreateTodo({ receiveTodos }) {
  const [todo, setTodo] = React.useState({ title: "" });

  function onChange(e) {
    console.log(e.target.value);
    setTodo({ title: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/todos/create", todo).then((res) => {
      console.log(res);
      receiveTodos();
    });
  }
  return (
    <form onSubmit={onSubmit} className="todoCreateFormContainer">
      <label>Input your title</label>
      <input
        type="text"
        placeholder="Title"
        value={todo.title}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function GetTodos() {
  const [allTodos, setTodos] = React.useState([]);

  React.useEffect(() => {
    receiveTodos();
  }, []);

  const receiveTodos = async () => {
    await axios.get("http://localhost:5000/todos/todos").then((todos) => {
      setTodos(todos.data);
    });
  };

  return (
    <>
      <div className="singleTodoStyles">
        <h1>Current todos</h1>
        {allTodos.map((todo) => {
          return (
            <div key={todo._id}>
              <Todo
                title={todo.title}
                todoId={todo._id}
                completed={todo.completed}
                receiveTodos={receiveTodos}
              />
            </div>
          );
        })}
      </div>
      <h2>Create your todo</h2>
      <CreateTodo receiveTodos={receiveTodos} />
    </>
  );
}

function Todos() {
  return (
    <div className="todosMainContainer">
      <GetTodos />
    </div>
  );
}

export default Todos;
