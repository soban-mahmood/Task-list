import React, { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useSelector } from "react-redux";
function EditTodo({ editTask, task }) {
  const [input, setinput] = useState(task?.task);
  const [date, setDate] = useState(task?.date);
  const [select2, setSelected] = useState(task?.select);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(input, task.id, date, select2);
    setinput("");
  };

  const onChangefun = (valaa) => {
    setSelected(valaa);
  };
  const onChange = (date, dateString) => {
    setDate(dateString);
  };
  const categories = useSelector((state) => state.todo.project);
  const options = categories.map((category) => {
    return { value: category.id, label: category.title };
  });
  return (
    <div>
      <div className="flex mt-3">
        <div onClick={handleSubmit}>
          <FaLocationArrow className="text-[#0034df]  text-[20px]  h-[40px] w-[90px] hover:text-[#6e968c] " />
        </div>
        <input
          type="text"
          name=""
          id=""
          value={input}
          placeholder="Enter your Todo Title"
          onChange={(e) => setinput(e.target.value)}
          className="py-2 px-3 bg-[#0034df]  w-[500px] text-white text-bold outline-none rounded"
        />
        <p className="  bg-[#0034df] py-3 px-3 text-black text-bold outline-none rounded">
          <Dropdown
            onChange={onChangefun}
            options={options}
            value={task.select ? task.select.value : null}
            placeholder="Update the Category"
            className="bg-[#0034df] py-2  text-black text-bold outline-none flex cursor-pointer"
          />
          <DatePicker
            onChange={onChange}
            className="bg-[#0034df] border-none hover:bg-[#0034df] text-white cursor-pointer font-bold"
            defaultValue={task?.date ? dayjs(task?.date) : null}
          />
        </p>
      </div>
    </div>
  );
}

export default EditTodo;
