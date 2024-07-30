import React, { useState, useEffect } from "react";


function Completed({}) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("val"));
    if (val) {
      setTodos(val);
    }
  }, []);
  const completedTasksList = () => {
    let completedTasks = [];
    todos.forEach((todo) => {
      if (todo.isCompleted) {
        completedTasks.push(todo);
      }
    });
    return completedTasks;
  };
  return (
    <div className="w-[full] h-screen">
      <div className="text-black text-3xl p-10">Completed Task</div>
      {completedTasksList().map((todo, index) => {
        return (
          <div className="flex justify-evenly mt-3 mb-3 py-3 text-black shadow-md rounded-lg ">
            <div key={index}>
              <div> {todo.task}</div>
              <div> {todo.date} </div>
              <div> {todo.title} </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Completed;
