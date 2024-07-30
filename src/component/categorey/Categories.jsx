import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import EditForm from "./EditForm";
import Editcate from "./Editcate";
import { useSelector, useDispatch } from "react-redux";
import { addCategory, editTask, editTodo } from "../Redux/Slice";

function Categories() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.todo.project);

  const addCate = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a category");
    } else {
      dispatch(addCategory(inputValue));
      setInputValue("");
    }
  };

  const editTodos = (id, title) => {
    dispatch(editTodo({ title, id }));
  };

  const editTasks = (title, id) => {
    dispatch(editTask({ title, id }));
  };

  return (
    <div className="p-6">
      <div className="flex">
        <div onClick={addCate}>
          <FaLocationArrow className="text-[#0034df] text-[20px] h-[40px] w-[90px] hover:text-[#6e968c]" />
        </div>

        <input
          type="text"
          placeholder="Enter your category"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          id="todoInput"
          className="py-3 px-3 bg-[#0034df] w-[685px] text-white text-bold outline-none rounded"
        />
      </div>
      <div>
        {categories?.map((item, index) =>
          item.isEditing ? (
            <Editcate
              key={index}
              editTasks={editTasks}
              title={item.title}
              id={item.id}
              item={item}
            />
          ) : (
            <EditForm
              key={index}
              editTodos={editTodos}
              id={item.id}
              title={item.title}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Categories;
