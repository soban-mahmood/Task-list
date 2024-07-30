import React, { useState, useEffect } from "react";
import moment from "moment";
import { Checkbox } from "antd";
import { RiH1 } from "react-icons/ri";
function Today() {
  const [todos, setTodos] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("val"));
    if (val) {
      setTodos(val);
    }
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const completedTasksList = () => {
    let completedTasks = [];
    todos.forEach((todo) => {
      if (todo.isCompleted) {
        completedTasks.push(todo);
      }
    });
    return completedTasks;
  };

  const today = moment().startOf("day");

  const todaysTodos = todos.filter((todo) =>
    moment(todo.date).isSame(today, "day")
  );

  return (
    <div className="w-[full] h-screen mt-[70px] text-black  ">
          <div className="text-black text-3xl p-5">Today Task</div>
      <Checkbox
        onChange={handleCheckboxChange}
        defaultChecked={isChecked}
        className="border bg-[#0034df] p-3 rounded text-white"
      >
        Completed Task
      </Checkbox>

      {isChecked &&
        completedTasksList().map((todo, index) => (
          <div
            key={index}
            className="flex justify-evenly mt-3 mb-3 py-3 text-white bg-[#0034df] rounded-lg"
          >
            <div>
              <div>{todo.task}</div>
              <div>{todo.date}</div>
              <div>{todo.title}</div>
              <div>Task Completed</div>
            </div>
          </div>
        ))}

      {todaysTodos.map((todo) => (
        <div className="flex justify-evenly mt-3 mb-3 py-3 shadow-md text-black rounded-lg ">
          <div>{todo.task}</div>
          {todo.date ? <div>{todo.date}</div> : <div>Today Task</div>}
        </div>
      ))}
    </div>
  );
}

export default Today;
