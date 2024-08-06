import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //simulate a data fetch from API

    // fetch("https://jsonplaceholder.typicode.com/todos/").then((response) =>
    //   response.json().then((data) => {
    //     setTodos(data);
    //   })
    // );
    const apiResponseData = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: true,
      },
    ];
    setTodos(apiResponseData);
  }, []);

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            const trElement = (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
              </tr>
            );
            return trElement;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
