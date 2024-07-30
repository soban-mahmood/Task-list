import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useSelector } from "react-redux";

function Todo({ addTodo }) {
  const [input, setInput] = useState([]);
  const [date, setDate] = useState();
  const defaultDate = dayjs(new Date());
  const [select, setSelected] = useState("");

  const categories = useSelector((state) => state.todo.project);

  const options = categories.map((category) => {
    return { value: category.id, label: category.title };
  });

  const onChangefun = (valaa) => {
    setSelected(valaa);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input || !date || select.length === 0) {
      alert("Please enter the complete task");
    } else {
      addTodo(input, date, select);
      setInput("");
    }
  };
  const onChange = (date, dateString) => {
    setDate(dateString);
  };

  return (
    <>
      <div className="flex">
        <div className="flex p-6 ">
          <div onClick={handleSubmit}>
            <FaLocationArrow className="text-[#0034df] h-[40px] w-[60px] hover:text-[#6e968c] " />
          </div>
          <input
            type="text"
            placeholder="Enter your Todo Title"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="py-1  px-3 bg-[#0034df] w-[400px]  text-white text-bold outline-none border rounded"
          />
          <></>
        </div>
        <div className="flex p-6 gap-5">
          <Dropdown
            options={options}
            onChange={onChangefun}
            value={select}
            placeholder="Select the Category"
            className=" py-2  text-black font-bold outline-none flex cursor-pointer rounded-lg"
          />
          <div className=" py-2  text-black text-bold outline-none font-bold  flex cursor-pointer rounded-lg">
            <DatePicker defaultValue={defaultDate} onChange={onChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
