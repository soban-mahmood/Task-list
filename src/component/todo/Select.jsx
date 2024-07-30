import React, { useEffect, useState } from "react";
import { Space, Select } from "antd";
import moment from "moment";
function SelectTimeFrame() {
  const [selectedTime, setSelectedTime] = useState("3");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("val"));
    if (val) {
      setTodos(val);
    }
  }, []);

  const items = [
    {
      label: "Month",
      key: "1",
      value: "1",
    },
    {
      label: "Week",
      key: "2",
      value: "2",
    },
    {
      label: "Day",
      key: "3",
      value: "3",
    },
  ];

  const handleChange = (value) => {
    setSelectedTime(value);
  };

  const filterTodos = () => {
    switch (selectedTime) {
      case "1":
        return todos.filter((todo) => {
          return moment(todo.date).isBetween(
            moment("2024-07-01"),
            moment("2024-07-31")
          );
        });

      case "2":
        return todos.filter((todo) => {
          return moment(todo.date).isBetween(
            moment("2024-07-22"),
            moment("2024-07-28")
          );
        });
      case "3":
        return todos.filter((todo) => {
          return moment(todo.date).isBetween(
            moment("2024-07-22"),
            moment("2024-07-25")
          );
        });
      default:
        return [];
    }
  };

  return (
    <div className="w-[full] h-screen mt-[70px] text-black  ">
      <div className="text-black text-3xl p-10">
        Select Task according to Date
      </div>
      <Space wrap>
        <Select
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={items}
          value={selectedTime}
        />
      </Space>

      {filterTodos().map((todo) => (
        <div className="flex justify-evenly mt-3 mb-3 py-3 shadow-md text-black rounded-lg ">
          <div>{todo.task}</div>
          {todo.date ? <div>{todo.date}</div> : <div>Today Task</div>}
        </div>
      ))}
    </div>
  );
}

export default SelectTimeFrame;
